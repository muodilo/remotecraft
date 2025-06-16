import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import JobList from "../components/FeaturedJobs";
import { Job } from "@/types/job";

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "-");

interface CompanyPageProps {
  companyName: string;
  jobs: Job[];
}

const API_URL = process.env.NEXT_PUBLIC_JOBS_API as string;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const { jobs }: { jobs: Job[] } = await res.json();

    const uniqueCompanies = Array.from(
      new Set(jobs.map((j) => j.company_name)),
    );

    return {
      paths: uniqueCompanies.map((name) => ({
        params: { slug: slugify(name) },
      })),
      fallback: "blocking",
    };
  } catch (err) {
    console.error("Error generating company paths:", err);
    return { paths: [], fallback: "blocking" };
  }
};


export const getStaticProps: GetStaticProps<CompanyPageProps> = async ({
  params,
}) => {
  try {
    const slug = params?.slug as string;
    if (!slug) return { notFound: true };
    const allRes = await fetch(API_URL);
    if (!allRes.ok) throw new Error(`Fetch failed: ${allRes.status}`);
    const { jobs: allJobs }: { jobs: Job[] } = await allRes.json();

    const firstMatch = allJobs.find((j) => slugify(j.company_name) === slug);
    if (!firstMatch) return { notFound: true };
    const companyName = firstMatch.company_name;
   const companyRes = await fetch(
      `${API_URL}?company_name=${encodeURIComponent(companyName)}`,
    );
    if (!companyRes.ok) throw new Error(`Fetch failed: ${companyRes.status}`);
    const { jobs }: { jobs: Job[] } = await companyRes.json();

    return {
      props: { companyName, jobs },
      revalidate: 1800, // 30 min
    };
  } catch (err) {
    console.error("Error fetching company page:", err);
    return {
      props: { companyName: "", jobs: [] },
      revalidate: 1800,
    };
  }
};


export default function CompanyPage({ companyName, jobs }: CompanyPageProps) {
  const router = useRouter();
  if (router.isFallback) return <Loading />;

  return (
    <section className="py-10">
      <h1 className="mb-8 text-3xl font-bold">
        {companyName || "Company"} — open remote roles
      </h1>
      {jobs.length ? <JobList jobs={jobs} /> : <p>No current openings.</p>}
    </section>
  );
}

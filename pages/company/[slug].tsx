import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Loading from "../components/Loading";        
import JobList   from "../components/FeaturedJobs";      
import { Job } from "@/types/job";


export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""); 


interface CompanyPageProps {
  companyName: string;    
  jobs: Job[];     
}


export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://remotive.com/api/remote-jobs");
  const { jobs }: { jobs: Job[] } = await res.json();

  const uniqueCompanies = Array.from(
    new Set(jobs.map((j) => j.company_name))
  );

  return {
    paths: uniqueCompanies.map((name) => ({
      params: { slug: slugify(name) },
    })),
    fallback: "blocking",        
  };
};


export const getStaticProps: GetStaticProps<CompanyPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string | undefined;
  if (!slug) return { notFound: true };


  const all = await fetch("https://remotive.com/api/remote-jobs");
  const { jobs: allJobs }: { jobs: Job[] } = await all.json();

  const firstMatch = allJobs.find(
    (j) => slugify(j.company_name) === slug
  );
  if (!firstMatch) return { notFound: true };

  const companyName = firstMatch.company_name;


  const companyRes = await fetch(
    `https://remotive.com/api/remote-jobs?company_name=${encodeURIComponent(
      companyName
    )}`
  );
  const { jobs }: { jobs: Job[] } = await companyRes.json();

  return {
    props: { companyName, jobs },
    revalidate: 1800, 
  };
};


export default function CompanyPage({
  companyName,
  jobs,
}: CompanyPageProps) {
  const router = useRouter();
  if (router.isFallback) return <Loading />;

  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-8">
        {companyName} — open remote roles
      </h1>

      {jobs.length ? (
        <JobList jobs={jobs} />              
      ) : (
        <p>No current openings.</p>
      )}
    </section>
  );
}

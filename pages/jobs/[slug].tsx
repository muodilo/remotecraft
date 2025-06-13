import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Job } from "@/types/job";
import Loading from "../components/Loading";

interface JobDetailPageProps {
  job: Job | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://remotive.com/api/remote-jobs");
  const data = await res.json();
  const jobs = data.jobs;

  const paths = jobs.map((job: any) => ({
    params: {
      slug: `${job.title.toLowerCase().replace(/\s+/g, "-")}-${job.id}`,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<JobDetailPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;

  const res = await fetch("https://remotive.com/api/remote-jobs");
  const data = await res.json();
  const jobs = data.jobs;

  const job = jobs.find((job: any) => {
    const generatedSlug = `${job.title.toLowerCase().replace(/\s+/g, "-")}-${
      job.id
    }`;
    return generatedSlug === slug;
  });

  if (!job) {
    return { notFound: true };
  }

  return {
    props: {
      job,
    },
    revalidate: 30,
  };
};

export default function JobDetailPage({ job }: JobDetailPageProps) {
  const router = useRouter();

  if (router.isFallback) {
  return <Loading />;
}


  if (!job) return <p className="p-10 text-center h-svh bg-white">Job not found.</p>;

  return (
    <div className="">
      <div className="flex items-center justify-between ">
        <h1 className="md:text-3xl text-xl font-bold mb-4">{job.title}</h1>
        <button className="bg-primaryColor px-3 py-1 rounded-xl">Save Job</button>
      </div>

      {/* <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: job.description }}
      /> */}
    </div>
  );
}

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Loading from "../components/Loading";


export interface RemotiveJob {
  id: number;
  title: string;
  company_name: string;
  category: string;
  job_type: string;
  candidate_required_location: string;
  publication_date: string;
  description: string;
  tags: string[];
}

interface RemotiveApiResponse {
  jobs: RemotiveJob[];
}

interface JobDetailPageProps {
  job: RemotiveJob | null;
}


const buildSlug = (job: RemotiveJob) =>
  `${job.title.toLowerCase().replace(/\s+/g, "-")}-${job.id}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://remotive.com/api/remote-jobs");
  const data: RemotiveApiResponse = await res.json();
  const jobs = data.jobs;

  const paths = jobs.map((job) => ({
    params: { slug: buildSlug(job) },
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
  const data: RemotiveApiResponse = await res.json();
  const jobs = data.jobs;

  const job = jobs.find((job) => buildSlug(job) === slug) ?? null;

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

  if (!job)
    return <p className="p-10 text-center h-svh bg-white">Job not found.</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="md:text-3xl text-xl font-bold mb-4">{job.title}</h1>
        <button className="bg-primaryColor px-3 py-1 rounded-xl text-nowrap">
          Save Job
        </button>
      </div>

      <p className="text-neutral-400 mb-5">at {job.company_name}</p>

      <p className="font-bold mb-5">Job details</p>
      <hr className="text-neutral-300 mb-3" />

      <div className="grid grid-cols-2 mb-3">
        <div>
          <p className="text-neutral-400">Job category</p>
          <p>{job.category}</p>
        </div>
        <div>
          <p className="text-neutral-400">Job type</p>
          <p>{job.job_type}</p>
        </div>
      </div>

      <hr className="text-neutral-300 mb-3" />

      <div className="grid grid-cols-2 mb-7">
        <div>
          <p className="text-neutral-400">Candidate location</p>
          <p>{job.candidate_required_location}</p>
        </div>
        <div>
          <p className="text-neutral-400">Publication date</p>
          <p>
            {new Date(job.publication_date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div
        className="prose mb-10"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />

      <p className="font-bold mb-4">Tags</p>
      <div className="flex items-center gap-3 mb-7 flex-wrap">
        {job.tags.map((tag) => (
          <p
            key={tag} 
            className="bg-primaryColor px-3 py-1 rounded-xl font-bold"
          >
            {tag}
          </p>
        ))}
      </div>

      <div className="mb-10 flex gap-3 justify-end">
        <button className="btn bg-secondaryColor text-white">Apply now</button>
        <button className="btn">Message company</button>
      </div>
    </div>
  );
}

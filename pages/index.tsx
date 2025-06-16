import Hero from "./components/Hero";
import { GetStaticProps } from "next";
import { Job } from "@/types/job";
import dynamic from "next/dynamic";
import Loading from "./components/Loading";

const FeaturedJobs = dynamic(() => import("./components/FeaturedJobs"), {
  loading: () => <Loading />
});

interface HomePageProps {
  jobs:Job[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_JOBS_API as string);
    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.status}`);
    }

    const data = await res.json();
    const jobs = data.jobs;

    return {
      props: { jobs },
      revalidate: 30,
    };
  } catch (error) {
    console.error("Error fetching jobs:", error);

    return {
      props: { jobs: [] },
      revalidate: 30,
    };
  }
};



export default function Home({jobs}:HomePageProps) {
  return (
    <>
      <Hero />
      <FeaturedJobs jobs={jobs} />
    </>
  );
}

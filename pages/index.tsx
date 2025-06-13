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

export const getStaticProps:GetStaticProps<HomePageProps>=async ()=>{
  const res = await fetch('https://remotive.com/api/remote-jobs')
  const data = await res.json()
  const jobs=data.jobs

  return {
    props:{
      jobs
    },
    revalidate:30
  }
}

export default function Home({jobs}:HomePageProps) {
  return (
    <>
      <Hero />
      <FeaturedJobs jobs={jobs} />
    </>
  );
}

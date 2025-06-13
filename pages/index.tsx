import Image from "next/image";
import Hero from "./components/Hero";
import { GetStaticProps } from "next";
import { dummyJobs } from "@/constants/dummyJobs";
import { Job } from "@/types/job";
import Link from "next/link";
import FeaturedJobs from "./components/FeaturedJobs";

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

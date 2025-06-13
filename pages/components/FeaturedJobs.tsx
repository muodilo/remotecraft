import Link from "next/link";
import Image from "next/image";
import { Job } from "@/types/job";

interface FeaturedJobsProps {
  jobs?: Job[];           
}

export default function FeaturedJobs({ jobs = [] }: FeaturedJobsProps) { 
  if (!jobs.length) return null;

  return (
    <section className="pt-5">
      <h2 className="font-bold text-xl mb-5">Featured Jobs</h2>

      <ul className="flex flex-col gap-3">
        {jobs.map((job) => (
          <li key={job.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-primaryColor rounded-lg overflow-hidden">
                <Image
                  src={job.company_logo}
                  alt={job.company_name}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <p className="font-bold text-sm">{job.title} at {job.company_name}</p>
                <p className="text-sm text-neutral-500">
                  {job.salary ? job.salary : "Salary not disclosed"}
                </p>
              </div>
            </div>

            <Link
              href={`/jobs/${job.title.toLowerCase().replace(/\s+/g, "-")}-${job.id}`}
              className="bg-primaryColor px-3 py-1 rounded-xl text-sm "
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

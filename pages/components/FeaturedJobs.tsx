import Link from "next/link";
import { Job } from "@/types/job";

interface FeaturedJobsProps {
  jobs: Job[];
}

export default function FeaturedJobs({ jobs }: FeaturedJobsProps) {
  return (
    <div className="pt-5">
      <p className="font-bold text-xl mb-5">Featured Jobs</p>

      <div className="flex flex-col gap-3">
        {jobs.map((job) => (
          <div key={job.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-primaryColor rounded-lg overflow-hidden">
                <img src={job.company_logo} alt={job.company_name} />
              </div>
              <div>
                <p className="font-bold text-sm">{job.salary || "Salary"}</p>
                <p className="text-sm text-neutral-500">
                  {job.title} at {job.company_name}
                </p>
              </div>
            </div>
            <Link
              className="bg-primaryColor px-3 py-1 rounded-xl text-sm"
              href={`/`}
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

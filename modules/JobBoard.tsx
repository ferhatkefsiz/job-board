import type { Job } from "@/models/Job"

import JobCard from "@/modules/JobCard"

export default function JobBoard({ header, jobs }: { header: string; jobs: Job[] }) {
  return (
    <div className="py-6 rounded-3xl">
      <div className="container">
        <h2 className="font-bold mb-4">{header || "Recent jobs"}</h2>

        <div className="flex flex-col gap-4">
          {!jobs?.length && <div>No jobs found</div>}
          {jobs && jobs.map((job, idx) => <JobCard key={idx} jobDoc={job} />)}
        </div>
      </div>
    </div>
  )
}

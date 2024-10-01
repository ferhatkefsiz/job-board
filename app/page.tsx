import mongoose from "mongoose"

import { addOrgAndUserData, JobModel } from "@/models/Job"

import Hero from "@/modules/Hero"
import JobBoard from "@/modules/JobBoard"

import { withAuth } from "@workos-inc/authkit-nextjs"

export default async function Home() {
  const { user } = await withAuth()
  await mongoose.connect(process.env.MONGO_URI as string)
  const latestJobs = await addOrgAndUserData(await JobModel.find({}, {}, { limit: 5, sort: "-createdAt" }), user)

  return (
    <>
      <Hero />
      <JobBoard header={"Jobs"} jobs={latestJobs} />
    </>
  )
}

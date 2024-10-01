import Hero from "@/modules/Hero"
import JobBoard from "@/modules/JobBoard"

export default async function Home() {
  const latestJobs = [
    {
      _id: "1",
      title: "Software Engineer",
      orgId: "org123",
      description: "We are looking for a software engineer to join our team.",
      orgName: "Acme Inc",
      remote: "Remote",
      type: "Full",
      salary: 100000,
      country: "United States",
      state: "California",
      city: "San Francisco",
      countryId: "US",
      stateId: "CA",
      cityId: "SF",
      jobIcon: "https://via.placeholder.com/150",
      contactPhoto: "https://via.placeholder.com/150",
      contactName: "John Doe",
      contactPhone: "123-456-7890",
      contactEmail: "",
      createdAt: "",
      updatedAt: ""
    }
  ]

  return (
    <>
      <Hero />
      <JobBoard header={"Jobs"} jobs={latestJobs} />
    </>
  )
}

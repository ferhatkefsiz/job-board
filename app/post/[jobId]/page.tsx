import Card from "@/components/ui/card"
import ScrollArea from "@/components/ui/scroll-area"
import { Text } from "@/components/ui/typography"
import { JobModel } from "@/models/Job"
import mongoose from "mongoose"
import Image from "next/image"

type PageProps = {
  params: {
    jobId: string
  }
}

export default async function SingleJobPage(props: PageProps) {
  const jobId = props.params.jobId
  await mongoose.connect(process.env.MONGO_URI as string)
  const jobDoc = await JobModel.findById(jobId)

  return (
    <div className="container mt-8 my-6">
      <div className="sm:flex">
        <div className="grow">
          <h1 className="text-4xl mb-2">{jobDoc.title}</h1>
          <div className="capitalize text-sm text-blue-800 mb-4">
            {jobDoc.remote} &middot; {jobDoc.city}, {jobDoc.country} &middot; {jobDoc.type}-time
          </div>
        </div>

        <div>
          <Image
            src={jobDoc?.jobIcon}
            alt={"job icon"}
            width={500}
            height={500}
            className="w-auto h-auto max-w-16 max-h-16"
          />
        </div>
      </div>

      <ScrollArea.Root className="min-h-14 max-h-96 px-4">
        <ScrollArea.Viewport className="w-full">
          <Text className="w-full text-wrap flex text-sm text-gray-600">{jobDoc.description}</Text>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" />
        <ScrollArea.Scrollbar orientation="horizontal" />
      </ScrollArea.Root>

      <Card className="mt-4 rounded-lg">
        <h3 className="font-bold mb-2">Apply by contacting us</h3>

        <div className="flex mt-4 gap-4">
          {jobDoc.contactPhoto && (
            <Image
              src={jobDoc.contactPhoto}
              alt={"contact person"}
              width={500}
              height={500}
              className="w-auto h-auto max-w-24 max-h-24"
            />
          )}

          <div className="flex content-center items-center">
            Name: {jobDoc.contactName}
            <br />
            Email: {jobDoc.contactEmail}
            <br />
            Phone: {jobDoc.contactPhone}
          </div>
        </div>
      </Card>
    </div>
  )
}

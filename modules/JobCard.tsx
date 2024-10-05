"use client"

import axios from "axios"
import { Link } from "@/components/ui/typography"
import Image from "next/image"

import TimeAgo from "@/components/TimeAgo"
import Card from "@/components/ui/card"

import { Job } from "@/models/Job"

import Button from "@/components/ui/button"
import Icon from "@/components/Icon"
import { redirect } from "next/navigation"

export default function JobCard({ jobDoc }: { jobDoc: Job }) {
  return (
    <Card
      href={`/post/${jobDoc._id}`}
      className="border card-shadow grid [grid-template-columns:auto_1fr] gap-4 w-full sm:min-w-[36rem]"
    >
      <span
        className="size-10 rounded-full flex justify-center items-center border border-gray-950/5 dark:border-white/5"
        style={{ background: "#F97316" }}
      >
        <Image src={jobDoc?.jobIcon} width={200} height={200} priority={true} className="text-white size-6" alt="" />
      </span>

      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-[--body-text-color] text-sm font-medium my-0 block capitalize">{jobDoc.orgName}</span>

          <span className="block size-1 rounded-full bg-[--ui-border-color]"></span>

          {jobDoc.createdAt && (
            <span className="text-[--caption-text-color] text-sm font-normal">
              <TimeAgo createdAt={jobDoc.createdAt} />
            </span>
          )}
        </div>
        <div className="block text-[--title-text-color] text-base font-medium my-1.5">{jobDoc.title}</div>
        <div className="flex flex-wrap gap-1.5 items-center">
          <div className="capitalize text-[--caption-text-color] text-sm font-normal flex items-center gap-1.5">
            <Icon name="map-pin" className="size-3.5" />
            {jobDoc.remote} &middot; {jobDoc.city}, {jobDoc.country}
          </div>

          <span className="block size-1 rounded-full bg-[--ui-border-color]"></span>

          <div className="text-[--caption-text-color] capitalize text-sm font-normal flex items-center gap-1.5">
            <Icon name="clock" className="size-3.5" />
            {jobDoc.type} time
          </div>

          <span className="block size-1 rounded-full bg-[--ui-border-color]"></span>
          <div className="text-[--caption-text-color] text-sm font-normal flex items-center gap-1.5">
            <Icon name="credit-card" className="size-3.5" />${jobDoc.salary}
          </div>

          {jobDoc.isAdmin && (
            <>
              {" "}
              &middot;
              <Button.Root
                size="xs"
                variant="ghost"
                onClick={async () => {
                  redirect(`/jobs/edit/${jobDoc._id}`)
                }}
              >
                <Button.Label>Edit</Button.Label>
              </Button.Root>
              &middot;{" "}
              <Button.Root
                size="xs"
                variant="ghost"
                onClick={async () => {
                  await axios.delete("/api/jobs?id=" + jobDoc._id)
                  window.location.reload()
                }}
              >
                <Button.Label>Delete</Button.Label>
              </Button.Root>
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { redirect } from "next/navigation"
import { saveJobAction } from "@/app/actions/job"
import { CitySelect, CountrySelect, StateSelect } from "react-country-state-city"
import "react-country-state-city/dist/react-country-state-city.css"

import type { Job } from "@/models/Job"

import ImageUpload from "@/components/ImageUpload"
import Button from "@/components/ui/button"
import RadioGroup from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import Textarea from "@/components/ui/text-area"

import { Caption, Display, Text } from "@/components/ui/typography"
import Label from "@/components/ui/label"

export default function JobForm({ orgId, jobDoc }: { orgId: string; jobDoc?: Job }) {
  const [countryId, setCountryId] = useState(jobDoc?.countryId || 0)
  const [stateId, setStateId] = useState(jobDoc?.stateId || 0)
  const [cityId, setCityId] = useState(jobDoc?.cityId || 0)
  const [countryName, setCountryName] = useState(jobDoc?.country || "")
  const [stateName, setStateName] = useState(jobDoc?.state || "")
  const [cityName, setCityName] = useState(jobDoc?.city || "")

  async function handleSaveJob(data: FormData) {
    data.set("country", countryName.toString())
    data.set("state", stateName.toString())
    data.set("city", cityName.toString())
    data.set("countryId", countryId.toString())
    data.set("stateId", stateId.toString())
    data.set("cityId", cityId.toString())
    data.set("orgId", orgId)
    const jobDoc = await saveJobAction(data)
    redirect(`/jobs/${jobDoc.orgId}`)
  }

  return (
    <div className="container">
      <Display size="4xl">Add a new Job</Display>

      <form action={handleSaveJob} className="flex flex-col gap-8 mt-6">
        {jobDoc && <Input type="hidden" name="id" value={jobDoc?._id} />}

        <div className="space-y-2 *:has-[:disabled]:opacity-50 *:has-[:disabled]:pointer-events-none">
          <Label htmlFor="title" className="font-medium text-lg text-body">
            Job Title
          </Label>
          <Input id="title" name="title" defaultValue={jobDoc?.title || ""} />
        </div>

        <div className="grid sm:grid-cols-3 gap-10 *:grow">
          <div className="space-y-2">
            <Text className="mt-0 font-medium text-lg">Job Location</Text>
            <RadioGroup.Root className="space-y-1" defaultValue={jobDoc?.remote || "hybrid"} name="remote">
              <div className="flex gap-2 items-center">
                <RadioGroup.Item value="onsite" id="onsite">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="onsite">On-site</Label>
              </div>

              <div className="flex gap-2 items-center">
                <RadioGroup.Item value="hybrid" id="hybrid">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="hybrid">Hybrid-remote</Label>
              </div>

              <div className="flex gap-2 items-center">
                <RadioGroup.Item value="remote" id="remote">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="remote">Fully remote</Label>
              </div>
            </RadioGroup.Root>
          </div>

          <div className="space-y-2">
            <Text className="mt-0 font-medium text-lg text-body"> Job Type</Text>
            <RadioGroup.Root className="space-y-1" defaultValue={jobDoc?.type || "full"} name="type">
              <div className="flex gap-2 items-center">
                <RadioGroup.Item value="project" id="project">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="project">Project</Label>
              </div>

              <div className="flex gap-2 items-center">
                <RadioGroup.Item value="part" id="part">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="part">Part-time</Label>
              </div>

              <div className="flex gap-2 items-center">
                <RadioGroup.Item value="full" id="full">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="full">Full-time</Label>
              </div>
            </RadioGroup.Root>
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary" className="font-medium text-lg text-body">
              Salary
            </Label>
            <Input name="salary" defaultValue={jobDoc?.salary || ""} />
            <Caption>$ k/year</Caption>
          </div>
        </div>
        <div>
          <Text className="font-medium text-lg mt-0">Location</Text>
          <div className="flex flex-col sm:flex-row gap-4 *:grow">
            <CountrySelect
              defaultValue={countryId ? { id: countryId, name: countryName } : 0}
              onChange={(e: any) => {
                setCountryId(e.id)
                setCountryName(e.name)
              }}
              placeHolder="Select Country"
            />
            <StateSelect
              defaultValue={stateId ? { id: stateId, name: stateName } : 0}
              countryid={countryId}
              onChange={(e: any) => {
                setStateId(e.id)
                setStateName(e.name)
              }}
              placeHolder="Select State"
            />
            <CitySelect
              defaultValue={cityId ? { id: cityId, name: cityName } : 0}
              countryid={countryId}
              stateid={stateId}
              onChange={(e: any) => {
                setCityId(e.id)
                setCityName(e.name)
              }}
              placeHolder="Select City"
            />
          </div>
        </div>

        <div className="sm:flex">
          <div className="w-1/3 space-y-3">
            <Text className="font-medium text-lg mt-0">Company Logo</Text>
            <ImageUpload name="jobIcon" defaultValue={jobDoc?.jobIcon || ""} />
          </div>

          <div className="grow space-y-3">
            <Text className="font-medium text-lg mt-0">HR Contact Information</Text>

            <div className="flex gap-2">
              <div className="">
                <ImageUpload name="contactPhoto" defaultValue={jobDoc?.contactPhoto || ""} />
              </div>
              <div className="grow flex flex-col gap-2">
                <Input placeholder="John Doe" name="contactName" defaultValue={jobDoc?.contactName || ""} />
                <Input placeholder="Phone" type="tel" name="contactPhone" defaultValue={jobDoc?.contactPhone || ""} />
                <Input placeholder="Email" type="email" name="contactEmail" defaultValue={jobDoc?.contactEmail || ""} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 *:has-[:disabled]:opacity-50 *:has-[:disabled]:pointer-events-none">
          <Label htmlFor="description" className="font-medium text-lg text-body">
            Job Description
          </Label>

          <Textarea defaultValue={jobDoc?.description || ""} id="description" name="description" />
        </div>

        <div>
          <Button.Root>
            <Button.Label>Publish Job</Button.Label>
          </Button.Root>
        </div>
      </form>
    </div>
  )
}

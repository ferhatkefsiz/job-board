"use client"

import { ChangeEvent, useRef, useState } from "react"
import axios from "axios"
import Image from "next/image"

import Button from "@/components/ui/button"
import Icon from "@/components/Icon"
import Card from "./ui/card"

export default function ImageUpload({ name, defaultValue = "" }: { name: string; defaultValue: string }) {
  const fileInRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [url, setUrl] = useState(defaultValue)

  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const input = ev.target as HTMLInputElement
    if (input && input.files?.length && input.files.length > 0) {
      setIsUploading(true)

      const file = input.files[0]
      const data = new FormData()
      data.set("file", file)

      const response = await axios.post("/api/upload", data)

      if (response.data.imgUrl) {
        setUrl(response.data.imgUrl)
        setIsUploading(false)
        setIsImageLoading(true)
      }
    }
  }

  const imgLoading = isUploading || isImageLoading

  return (
    <>
      <Card className="rounded-md size-24 inline-flex items-center content-center justify-center">
        {imgLoading && <Icon name={"loader"} className="text-gray-400 animate-spin" />}

        {!isUploading && url && (
          <Image
            src={url}
            alt={"uploaded image"}
            width={1024}
            height={1024}
            onLoadingComplete={() => setIsImageLoading(false)}
            className="w-auto h-auto max-w-24 max-h-24"
          />
        )}

        {!imgLoading && !url && <Icon name={"star"} className="text-gray-400" />}
      </Card>

      <input type="hidden" value={url} name={name} />

      <div className="mt-2">
        <input onChange={(ev) => upload(ev)} ref={fileInRef} type="file" className="hidden" />
        <Button.Root onClick={() => fileInRef.current?.click()} variant="soft">
          <Button.Label>select file</Button.Label>
        </Button.Root>
      </div>
    </>
  )
}

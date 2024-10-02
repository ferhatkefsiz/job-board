import { cloudinary } from "@/cloudinary-config" // your config path
import type { UploadApiErrorResponse, UploadApiResponse } from "cloudinary"

type UploadResponse = { success: true; result?: UploadApiResponse } | { success: false; error: UploadApiErrorResponse }

export const uploadToCloudinary = (fileUri: string, fileName: string): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: "auto",
        filename_override: fileName,
        folder: "job-board-images",
        use_filename: true
      })
      .then((result) => {
        resolve({ success: true, result })
      })
      .catch((error) => {
        reject({ success: false, error })
      })
  })
}

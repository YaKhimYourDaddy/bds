"use client";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/dropzone";
import { useSupabaseUpload } from "@/hooks/use-supabase-upload";

export default function Page() {
  const props = useSupabaseUpload({
    bucketName: "images",
    path: "images",
    allowedMimeTypes: ["image/*"],
    maxFiles: 4,
    maxFileSize: 1000 * 1000 * 10, // 10MB,
  });

  return (
    <div className="w-[500px]">
      <Dropzone {...props}>
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  );
}

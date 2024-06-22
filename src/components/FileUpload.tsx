'use client'
import { Inbox, Loader2 } from 'lucide-react';
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from "react-hot-toast";
import {uploadToS3} from '@/lib/s3'



const FileUpload = () => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: { "application/pdf": [".pdf"] },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
          console.log(acceptedFiles);
          const file = acceptedFiles[0];
          if (file.size > 10 * 1024 * 1024) {
            // bigger than 10mb!
            alert('File too large')
            // toast.error("File too large");
            return;
          }
          try {
            console.log("uploading")
            const data = await uploadToS3(file);
            console.log("data", data);
          } catch (error) {
            console.log(error);
          }
        },
      });

    return (
        <div className="p-2 bg-white rounded-xl">
          <div
            {...getRootProps({
              className:
                "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
            })}
          >
            <input {...getInputProps()} />
            <>
            <Inbox className="w-10 h-10 text-blue-500" />
                <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
            </>
            {/* {uploading || isLoading ? (
              <>
                loading state */}
                {/* <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
                <p className="mt-2 text-sm text-slate-400">
                  Spilling Tea to GPT...
                </p>
              </>
            ) : (
              <>
                <Inbox className="w-10 h-10 text-blue-500" />
                <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
              </>
            )} */}
          </div>
        </div>
      );
};

export default FileUpload
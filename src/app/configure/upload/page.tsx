"use client"

import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Progress } from '@/components/ui/progress'
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from 'next/navigation'

const Page = () => {
    const { toast } = useToast();
    const router = useRouter();

    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [isPending, startTransition] = useTransition();

    const { startUpload, isUploading } = useUploadThing("imageUploader", {
        onClientUploadComplete: ([data]) => {
            const configId = data.serverData.configId;
            startTransition(() => {
                router.push(`/configure/design?id=${configId}`);
            });
        },
        onUploadProgress(p) {
            setUploadProgress(p);
        }
    });

    const onDropRejected = (rejectedFiles: FileRejection[]) => {
        const [file] = rejectedFiles;
        setIsDragOver(false);
        toast({
            title: `${file.file.type} không hợp lệ`,
            description: "Vui lòng chọn file PNG, JPG, hoặc JPEG dưới 4MB.",
            variant: "destructive"
        });
    };

    const onDropAccepted = (acceptedFiles: File[]) => {
        startUpload(acceptedFiles, { configId: undefined });
        setIsDragOver(false);
    };

    return (
        <div className={cn(
            "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1",
            "ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center", 
            { "ring-blue-900/25 bg-blue-900/10": isDragOver }
        )}>
            <div className="relative flex flex-1 flex-col items-center justify-center w-full">
                <Dropzone 
                    onDropRejected={onDropRejected} 
                    onDropAccepted={onDropAccepted}
                    accept={{
                        "image/png": [".png"],
                        "image/jpeg": [".jpeg"],
                        "image/jpg": [".jpg"]
                    }}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div className="h-full w-full flex-1 flex flex-col items-center justify-center" {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragOver ? (
                                <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
                            ) : isUploading || isPending ? (
                                <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
                            ) : (
                                <Image className="h-6 w-6 text-zinc-500 mb-2" aria-label="Upload image" />
                            )}
                            <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                                {isUploading ? (
                                    <div className="flex flex-col items-center">
                                        <p>Đợi xíu nhen...</p>
                                        <Progress value={uploadProgress} className="mt-2 w-40 h-2 bg-gray-300" />
                                    </div>
                                ) : isPending ? (
                                    <div className="flex flex-col items-center">
                                        <p>Đang xử lý...</p>
                                    </div>
                                ) : isDragOver ? (
                                    <p><span className='font-semibold'>Thả file vào</span> để tải ảnh lên</p>
                                ) : (
                                    <p>
                                        <span className='font-semibold'>Click vào để đăng ảnh</span> hoặc kéo thả ảnh vào đây
                                    </p>
                                )}
                            </div>
                            {!isPending && <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>}
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    );
};

export default Page;

"use client"
import useDateSourceNew from "@/src/modules/trainCreate/hooks/useDataSourceNew"
import { DocumentUpload, Trash } from "iconsax-react"
import { useCallback, useState } from "react"
import { useDropzone, FileRejection } from "react-dropzone";
import { toast } from "sonner";


const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_FILE_COUNT = 6;
const UploadFlie = () => {
    const { fileList, addFileList } = useDateSourceNew()
    const onDrop = useCallback(
        (acceptedFiles: any, fileRejections: FileRejection[]) => {
            let totalSize = fileList.reduce((acc, file) => acc + file.size, 0)
            let newFiles = []

            if (fileList.length + acceptedFiles.length > MAX_FILE_COUNT) {
                toast.error("شما نمی توانید بیش از 6 فایل آپلود کنید")
                return
            }

            for (let file of acceptedFiles) {
                totalSize += file.size
                if (totalSize > MAX_FILE_SIZE) {
                    toast.error("مجموع حجم فایل های شما بیشتر از 10 MB میباشد")
                    return
                }
                newFiles.push(file)
            }

            // setErrorMessage("")
            addFileList([...fileList, ...newFiles])
        },
        [fileList, addFileList],
    )

    const removeFile = (fileName: string) => {
        addFileList(fileList.filter((file) => file.name !== fileName))
    }

    // Get the necessary props from the useDropzone hook
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"],
            "application/msword": [".doc", ".dot"],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                [".docx"],
            "text/plain": [".txt"],
        },
    })

    return (
        <>
            <form className="flex h-64 flex-col items-center justify-center">
                <div
                    {...getRootProps()}
                    className="flex h-3/4 w-3/4 cursor-pointer items-center justify-center border-2 border-dashed"
                >
                    <div>
                        <input {...getInputProps()} />
                        <div className="flex flex-col items-center">
                            <DocumentUpload size="32" color="#000" />
                            {isDragActive ? (
                                <p>فایل ها را اینجا رها کنید...</p>
                            ) : (
                                <div className="mt-4 text-center">
                                    <p>
                                        فایل‌ها را اینجا بکشید و رها کنید یا
                                        کلیک کنید آن ها را انتخاب کنید...
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Supported File Types: .pdf, .doc, .docx,
                                        .txt
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">
                    <span>
                        اگر یک PDF آپلود می کنید، مطمئن شوید که می توانید متن را
                        انتخاب یا برجسته کنید.
                    </span>
                </div>
            </form>
            {fileList.length > 0 && (
                <div>
                    <div className="my-6 flex items-center">
                        <hr className="w-full border-t border-zinc-300" />
                        <span className="whitespace-nowrap px-2 text-zinc-600">
                            فایل های پیوست شده
                        </span>
                        <hr className="w-full border-t border-zinc-300" />
                    </div>
                    <div>
                        <div className="mx-auto mt-4 w-3/4">
                            {fileList.length > 0 && (
                                <ul>
                                    {fileList.map((file, index) => (
                                        <li
                                            key={index}
                                            className="my-2 flex items-center justify-between rounded-md border p-2 shadow-sm"
                                        >
                                            <span className="max-w-[80%] truncate">
                                                {file.name}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    removeFile(file.name)
                                                }
                                                className="ml-2"
                                            >
                                                <Trash
                                                    size="16"
                                                    color="#e3342f"
                                                />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                  
                </div>
            )}
        </>
    )
}

export default UploadFlie

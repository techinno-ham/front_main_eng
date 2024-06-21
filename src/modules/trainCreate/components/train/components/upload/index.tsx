"use client"
import useDateSource from "@/src/modules/trainCreate/hooks/useDataSource"
import { DocumentUpload, Trash } from "iconsax-react"
import { useCallback, useState } from "react"
import { useDropzone, FileRejection } from "react-dropzone"

const UploadFlie = () => {
    const { fileList, addFileList } = useDateSource()

    const onDrop = useCallback((acceptedFiles: any) => {
        addFileList([...fileList, ...acceptedFiles])
    }, [])

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
                    <div></div>
                </div>
            )}
        </>
    )
}

export default UploadFlie

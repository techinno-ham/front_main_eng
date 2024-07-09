"use client"
import useDateSource from "@/src/modules/trainCreate/hooks/useDataSource"
import { DocumentUpload, Trash } from "iconsax-react"
import { useCallback, useEffect, useState } from "react"
import { useDropzone, FileRejection } from "react-dropzone"
import useDateSourceUpdate from "../../hooks/useDataSourceUpdate"
import useStoreLoadData from "../../hooks/loadDataSource"

const UploadFlie = () => {
    const {
        fileList,
        addFileList,
        uploadedFile,
        addUploadedFile,
        isFileInitialized,
        addFileInitialized,
    } = useDateSourceUpdate()
    const { data } = useStoreLoadData()

    const onDrop = useCallback(
        (acceptedFiles: any) => {
            addFileList([...fileList, ...acceptedFiles])
        },
        [fileList, addFileList],
    )

    const removeFile = (fileName: string) => {
        addFileList(fileList.filter((file) => file.name !== fileName))
    }

    useEffect(() => {
        const transformUrlsToDataObjects = (links: any) => {
            let newStructuresLinks = links.map((link: string) => {
                const fileName = link.split("/").pop()
                return {
                    url: link,
                    fileName: fileName,
                    remove: false,
                }
            })

            return newStructuresLinks
        }
        if (!isFileInitialized) {
            addUploadedFile(transformUrlsToDataObjects(data.static_files))
            addFileList([])
            addFileInitialized(true)
        }
    }, [isFileInitialized, addFileInitialized])

    const removeUploadedFile = (fileName: string) => {
        const newUploadedFile: any = uploadedFile.map((file: any) => {
            return file.fileName === fileName ? { ...file, remove: true } : file
        })
        addUploadedFile(newUploadedFile)
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

    const hasActiveUploadedFiles = uploadedFile.some(
        (file: any) => !file.remove,
    )

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
            {uploadedFile.length > 0 && hasActiveUploadedFiles && (
                <div>
                    <div className="my-6 flex items-center">
                        <hr className="w-full border-t border-zinc-300" />
                        <span className="whitespace-nowrap px-2 text-zinc-600">
                            فایل های اپلود شده
                        </span>
                        <hr className="w-full border-t border-zinc-300" />
                    </div>
                    <div>
                        <div className="mx-auto mt-4 w-3/4">
                            <ul>
                                {uploadedFile.map(
                                    (file: any, index) =>
                                        !file.remove && (
                                            <>
                                                <li
                                                    key={index}
                                                    className="my-2 flex items-center justify-between rounded-md border p-2 shadow-sm"
                                                >
                                                    <span className="max-w-[80%] truncate">
                                                        {file?.fileName}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            removeUploadedFile(
                                                                file?.fileName,
                                                            )
                                                        }
                                                        className="ml-2"
                                                    >
                                                        <Trash
                                                            size="16"
                                                            color="#e3342f"
                                                        />
                                                    </button>
                                                </li>
                                            </>
                                        ),
                                )}
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>
            )}
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

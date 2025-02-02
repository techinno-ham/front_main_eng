"use client"
import { DocumentUpload, Trash } from "iconsax-react"
import { useCallback, useEffect, useState } from "react"
import { useDropzone, FileRejection } from "react-dropzone"
import useDateSourceUpdate from "../../hooks/useDataSourceUpdate"
import useStoreLoadData from "../../hooks/loadDataSource"
import { toast } from "sonner"

interface UploadedFile {
    url: string
    fileName: string
    remove: boolean
    size?: any
}

const MAX_FILE_COUNT = 6
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const UploadFlie = () => {
    const {
        fileList,
        addFileList,
        uploadedFile,
        addUploadedFile,
        isFileInitialized,
        addFileInitialized,
        addFileChanged,
        isFileChanged,
        addUploadedChanged,
        isUploadedChanged,
    } = useDateSourceUpdate()
    const { data } = useStoreLoadData()

    const onDrop = useCallback(
        (acceptedFiles: any) => {
            let totalSize = fileList.reduce((acc, file) => acc + file.size, 0)
            let newFiles = []

            // Add sizes from uploadedFile where remove is false
            totalSize += (uploadedFile as UploadedFile[])
                .filter((file: UploadedFile) => !file.remove)
                .reduce((acc, file) => acc + file.size, 0)

            const uploadedFileCount = (uploadedFile as UploadedFile[]).filter(
                (item) => !item.remove,
            ).length
            if (
                fileList.length + acceptedFiles.length + uploadedFileCount >
                MAX_FILE_COUNT
            ) {
                toast.error("You cannot upload more than 6 files")
                return
            }
            for (let file of acceptedFiles) {
                totalSize += file.size
                if (totalSize > MAX_FILE_SIZE) {
                    toast.error("The total size of your files exceeds 10 MB")
                    return
                }
                newFiles.push(file)
            }
            if (!isFileChanged) {
                addFileChanged(true)
            }
            addFileList([...fileList, ...newFiles])
        },
        [fileList, addFileList],
    )

    const removeFile = (fileName: string) => {
        addFileList(fileList.filter((file) => file.name !== fileName))
    }

    useEffect(() => {
        const transformUrlsToDataObjects = (files: any) => {
            let newStructuresLinks = files.map((file: any) => {
                return {
                    ...file,
                    remove: false,
                }
            })

            return newStructuresLinks
        }
        if (!isFileInitialized) {
            addUploadedFile(transformUrlsToDataObjects(data.files_info))
            addFileList([])
            addFileInitialized(true)
        }
    }, [isFileInitialized, addFileInitialized])

    const removeUploadedFile = (fileName: string) => {
        const newUploadedFile: any = uploadedFile.map((file: any) => {
            return file.name === fileName ? { ...file, remove: true } : file
        })
        if (!isUploadedChanged) {
            addUploadedChanged(true)
        }
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
                                <p>Drop the files here...</p>
                            ) : (
                                <div className="mt-4 text-center">
                                    <p>
                                        Drag and drop files here, or click to
                                        select them...
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
                        If you are uploading a PDF, make sure you can select
                        or highlight the text.
                    </span>
                </div>
            </form>
            {uploadedFile.length > 0 && hasActiveUploadedFiles && (
                <div>
                    <div className="my-6 flex items-center">
                        <hr className="w-full border-t border-zinc-300" />
                        <span className="whitespace-nowrap px-2 text-zinc-600">
                            Uploaded Files
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
                                                        {file?.name}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            removeUploadedFile(
                                                                file?.name,
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
                            Attached Files
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

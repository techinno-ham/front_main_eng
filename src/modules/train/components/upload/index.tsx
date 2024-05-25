"use client"
import { DocumentUpload } from "iconsax-react"
import { useCallback, useState } from "react"
import { useDropzone, FileRejection } from "react-dropzone"

const UploadFlie = () => {
    const [files, setFiles] = useState<File[]>([])

    const onDrop = useCallback((acceptedFiles: any) => {
        // Do something with the files (this function needs to be implemented)
        // For example, you can log the file names
        console.log(acceptedFiles)
    }, [])

    // Get the necessary props from the useDropzone hook
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    return (
        <>
            <form className="flex h-72 flex-col items-center justify-center">
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
        </>
    )
}

export default UploadFlie

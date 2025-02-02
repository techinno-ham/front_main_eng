"use client"
import LoaderLottie from "@/src/shared/components/common/loader"
import { useDropzone, FileRejection } from "react-dropzone"
import service from "@/src/shared/services/service"
import useUserStore from "@/src/shared/store/userStore"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const MAX_IMAGE_SIZE = 1 * 1024 * 1024 // 1MB
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/svg+xml"]

const Profile = () => {
    const { register, handleSubmit, setValue, watch } = useForm()
    const { user, setUser } = useUserStore()
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
    const [isFormDirty, setIsFormDirty] = useState(false)
    const [image, setImage] = useState<File | null>(null)

    const onDrop = useCallback(
        (acceptedFiles: File[], fileRejections: FileRejection[]) => {
            const handleFileUpload = async () => {
                if (acceptedFiles.length > 1) {
                    toast.error("You cannot upload more than one image.")
                    return
                }

                const file = acceptedFiles[0]

                if (!SUPPORTED_FORMATS.includes(file.type)) {
                    toast.error("Only JPG, PNG, and SVG formats are supported.")
                    return
                }

                if (file.size > MAX_IMAGE_SIZE) {
                    toast.error("File size must not exceed 1MB.")
                    return
                }

                setImage(file)
                const formData = new FormData()
                formData.append("image", file)

                try {
                    const response = await service.updateUserImage(formData)
                    toast.success(
                        "Your profile picture has been successfully updated.",
                    )
                    setUser(response.data)
                } catch (error) {
                    toast.error("Failed to upload profile picture.")
                    console.error("Image upload failed:", error)
                }
            }

            handleFileUpload()
        },
        [],
    )

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: SUPPORTED_FORMATS.reduce(
            (acc, format) => ({ ...acc, [format]: [] }),
            {},
        ),
    })

    const onSubmit = async (formData: any) => {
        setIsLoadingSubmit(true)
        try {
            const response = await service.updateUser(formData)
            toast.success("Your changes have been successfully saved.")
            setUser(response.data)
        } catch (error) {
            toast.error("An error occurred while updating.")
            console.error("Update failed:", error)
        } finally {
            setIsLoadingSubmit(false)
        }
    }

    const resetPassword = async () => {
        toast.error("This service is currently unavailable.")
    }

    useEffect(() => {
        if (user) {
            setValue("name", user.name)
            setValue("lastName", user.lastName)
            setValue("email", user.email)
            if (user.mobile) {
                setValue("mobile", user.mobile)
            }
            if (user.organisation) {
                setValue("organisation", user.organisation)
            }
            setIsLoading(false)
        }
    }, [user])

    const watchedFields = watch()

    useEffect(() => {
        const isDirty = Object.keys(watchedFields).some(
            (key) => watchedFields[key] !== user[key],
        )
        setIsFormDirty(isDirty)
    }, [watchedFields, user])

    if (isLoading)
        return (
            <div className="fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2 md:left-[44%]">
                <div className="flex items-center gap-3">
                    <span>Loading data...</span>
                    <LoaderLottie />
                </div>
            </div>
        )

    return (
        <div className="container mx-auto mb-40 mt-24 h-full px-4">
            <div className="mt-6 rounded-2xl bg-white px-8 py-6 shadow-lg md:min-h-[450px]">
                <div className="flex w-full flex-col items-center justify-center gap-3">
                    <img
                        className="h-16 w-16 cursor-pointer rounded-full"
                        src={image ? URL.createObjectURL(image) : user.photoUrl}
                        alt="Profile Avatar"
                    />
                    <div
                        {...getRootProps()}
                        className="flex flex-row items-center gap-2"
                    >
                        <input {...getInputProps()} />
                        <button
                            className="inline-flex h-7 items-center justify-center rounded-md border px-3 text-xs font-medium shadow-sm hover:bg-zinc-100"
                            type="button"
                        >
                            Upload Profile Picture
                        </button>
                    </div>
                </div>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full pb-8 md:w-1/2">
                        <label className="block text-sm font-medium text-zinc-700">
                            Name:
                        </label>
                        <input
                            {...register("name")}
                            className="w-full rounded-md border px-3 py-2"
                            placeholder="Enter your name..."
                            type="text"
                        />
                    </div>
                    <div className="w-full pb-8 md:w-1/2">
                        <label className="block text-sm font-medium text-zinc-700">
                            Last Name:
                        </label>
                        <input
                            {...register("lastName")}
                            className="w-full rounded-md border px-3 py-2"
                            placeholder="Enter your last name..."
                            type="text"
                        />
                    </div>
                    <div className="w-full pb-8 md:w-1/2">
                        <label className="block text-sm font-medium text-zinc-700">
                            Email:
                        </label>
                        <input
                            {...register("email")}
                            className="w-full rounded-md border px-3 py-2"
                            type="text"
                            disabled
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={!isFormDirty || isLoadingSubmit}
                            className={`rounded-md px-4 py-2 text-white ${!isFormDirty || isLoadingSubmit ? "bg-gray-400" : "bg-blue-600"}`}
                        >
                            {isLoadingSubmit ? "Updating..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile

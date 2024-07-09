"use client"
import useDateSource from "@/src/modules/trainCreate/hooks/useDataSource"
import useDateSourceUpdate from "../../hooks/useDataSourceUpdate"
import { useEffect, useState } from "react"
import useStoreLoadData from "../../hooks/loadDataSource"

const TextInput = () => {
    const {
        addText,
        text,
        addTextInitialized,
        isTextInitialized,
        isTextChanged,
        addTextChanged,
    } = useDateSourceUpdate()
    const { data } = useStoreLoadData()

    useEffect(() => {
        if (!isTextInitialized) {
            const initText = data.text_input
            addText(initText)
            addTextInitialized(true)
        }
    }, [isTextInitialized, addText, addTextInitialized])

    const handleChange = (e: any) => {
        if (!isTextChanged) {
            addTextChanged(true)
        }
        const newText = e.target.value
        addText(newText)
    }
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="h-11/12 w-11/12">
                    <textarea
                        className="h-full w-full resize-none rounded-md border border-gray-300 p-4"
                        placeholder="میتوانید اینجا بنویسید تا من یاد بگیرم ..."
                        rows={12}
                        onChange={handleChange}
                        value={text}
                    />
                </div>
            </div>
        </>
    )
}

export default TextInput

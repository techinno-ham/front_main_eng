import useDateSourceNew from "@/src/modules/trainCreate/hooks/useDataSourceNew"

const TextInput = () => {
    const { addText, addTextNumberChar, text } = useDateSourceNew()
    const handleChange = (e: any) => {
        const newText = e.target.value
        addText(newText)
        addTextNumberChar(newText.length)
    }
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="h-11/12 md:h-[50vh] w-11/12">
                    <textarea
                        className="panel_custom_scrollbar h-full w-full resize-none rounded-md border border-gray-300 p-4"
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

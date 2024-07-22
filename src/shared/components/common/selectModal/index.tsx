"use client"

import "./Modal.css"

import { useEffect, useState } from "react"
import useSelectModal from "./hooks/useSelectModal.ts"
import { CloseSquare } from "iconsax-react"
import { toast } from "sonner"
import useChatModal from "../chatModal/hooks/useChatModal"

const SelectModalCustom = () => {
    const SelectModal = useSelectModal()
    const SelectModalChat = useChatModal()
    const [selectedUrls, setSelectedUrls] = useState([])
    const [selectError, setSelectError] = useState("")

    const handleCheckboxChange = (url: any) => {
        if (selectedUrls.includes(url)) {
            setSelectedUrls(
                selectedUrls.filter((selectedUrl) => selectedUrl !== url),
            )
        } else {
            setSelectedUrls([...selectedUrls, url])
        }
    }
    const handleClsoeModal = () => {
        SelectModal.onClose()
        setTimeout(() => {
            SelectModal.onInit()
        }, 2000)
        SelectModal.resetUrls()
        setSelectedUrls([])
    }
    const handleSubmit = () => {
        if (selectedUrls.length < 3) {
            toast.error("لطفا حداقل سه لینک را انتخاب کنید.")
            return
        }

        SelectModal.onClose()
        setTimeout(() => {
            SelectModal.onInit()
            SelectModalChat.onOpen()
        }, 2000)
        SelectModal.resetUrls()
        setSelectedUrls([])
    }

    useEffect(() => {
        setSelectError("")
    }, [selectedUrls])

    return (
        <div
            id="modal-container"
            className={
                SelectModal.isOpen === null
                    ? ""
                    : SelectModal.isOpen
                      ? "one"
                      : "one out"
            }
        >
            <div className="modal-background">
                <div className="modal">
                    <div className="header">
                        <div className="buttonHeader">
                            <button onClick={handleClsoeModal}>
                                <CloseSquare size={22} />
                            </button>
                        </div>
                        <div className="titleHeader">
                            <span>انتخاب صفحات</span>
                        </div>
                        <div style={{ marginTop: "auto" }}>
                            <hr className="custom-hr" />
                        </div>
                    </div>

                    <span
                        style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            fontSize: "16px",
                            color: "gray",
                        }}
                    >
                        صفحات مورد نظرتان را برای بررسی دیتا انتخاب کنید؟
                    </span>
                    <div className="body">
                        {SelectModal.urls.map((url, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={`url-${index}`}
                                    onChange={() => handleCheckboxChange(url)}
                                    checked={selectedUrls.includes(url)}
                                    className="inputCheck"
                                />
                                <label
                                    htmlFor={`url-${index}`}
                                    className="labelUrl"
                                >
                                    {url}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="footer">
                        <button className="sumbitBtn" onClick={handleSubmit}>
                            بررسی اطلاعات
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectModalCustom

"use client"

import "./modal.css"

import useChatModal from "./hooks/useChatModal"
import ChatDemo from "./components/chatDemo"

const SelectModalChat = () => {
    const SelectModal = useChatModal()

    return (
        <div
            id="modalContainer"
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
                    <ChatDemo />
                </div>
            </div>
        </div>
    )
}

export default SelectModalChat

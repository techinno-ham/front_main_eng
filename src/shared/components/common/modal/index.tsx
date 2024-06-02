import { Add } from "iconsax-react"

export default function Modal({ open, onClose, children }: any) {
    return (
        <div
            onClick={onClose}
            className={`
          fixed inset-0 z-50 flex items-center justify-center transition-colors
          ${open ? "visible bg-black/20" : "invisible"}
        `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
            rounded-xl bg-white p-2 py-5 shadow transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
            >
                <button
                    onClick={onClose}
                    className="absolute right-2 top-2 rounded-lg bg-white p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                >
                    <Add size="32" className="rotate-45 transform" />
                </button>
                {children}
            </div>
        </div>
    )
}

// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/10/solid';

import { ArrowLeft2, ArrowRight2 } from "iconsax-react"

interface PaginationProps {
    currentPage: number
    totalPages: number
    title:string
    onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    title
}) => {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous Page
                </button>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next Page
                </button>
            </div>
            <div className="mt-2 hidden flex-col gap-3 sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    >
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ArrowLeft2 size="25" color="gray" />
                            
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => onPageChange(i + 1)}
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === i + 1 ? "bg-blue-600 text-white" : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"} focus:z-10`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ArrowRight2 size="25" color="gray" />
                        </button>
                    </nav>
                </div>
                <div>
                    <p className="text-sm text-gray-700">
                        Displaying{" "}
                        <span className="font-medium">
                            {(currentPage - 1) * 10 + 1}
                        </span>{" "}
                        to{" "}
                        <span className="font-medium">
                            {Math.min(currentPage * 10, totalPages * 10)}
                        </span>{" "}
                        of{" "}
                        <span className="font-medium">{totalPages * 10}</span>{" "}
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pagination

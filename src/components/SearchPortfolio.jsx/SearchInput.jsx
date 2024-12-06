import React from 'react'

const SearchInput = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center p-6 space-y-4 md:space-y-0 md:space-x-4 max-w-xl mx-auto bg-[#1e293b] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="flex bg-[#334155] p-3 md:p-4 w-full md:w-auto space-x-4 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                        type="text"
                        placeholder="Article name or keyword..."
                    />
                </div>
                <button className="bg-[#475569] py-3 px-6 text-white font-semibold rounded-lg hover:shadow-lg hover:bg-[#64748b] transition duration-300 cursor-pointer">
                    Search
                </button>
            </div>
            <div className='text-red-500'>nebiii</div>
        </div>
    )
}

export default SearchInput

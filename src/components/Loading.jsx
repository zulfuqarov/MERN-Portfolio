import React from 'react'

const Loading = () => {
    return (
        <div className="bg-gradient-to-r from-[#1e2a47] to-[#0f172a] w-full min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-6">
                {/* Loading Spinner */}
                <div className="relative flex justify-center items-center">
                    <div className="w-24 h-24 border-8 border-t-8 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                </div>

                {/* Text */}
                <h2 className="text-white text-2xl sm:text-3xl font-semibold">Loading...</h2>
            </div>
        </div>
    )
}

export default Loading

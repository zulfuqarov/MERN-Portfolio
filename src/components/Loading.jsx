import React, { useContext } from 'react'

const Loading = () => {


    return (
        <div className="bg-gradient-to-r from-[#1e2a47] to-[#0f172a] w-full min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-6">
                {/* Pulsing Circles */}
                <div className="flex space-x-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#3b5f73] via-[#5a7e9d] to-[#4c6d8c] rounded-full animate-pulse"></div>
                    <div className="w-20 h-20 bg-gradient-to-r from-[#3b5f73] via-[#5a7e9d] to-[#4c6d8c] rounded-full animate-pulse delay-200"></div>
                    <div className="w-20 h-20 bg-gradient-to-r from-[#3b5f73] via-[#5a7e9d] to-[#4c6d8c] rounded-full animate-pulse delay-400"></div>
                </div>
            </div>
        </div >
    )
}

export default Loading

import React from 'react'

const Loading = () => {
    return (
        <div class="bg-[#020617] w-full min-h-screen flex justify-center items-center">
            <div class="flex justify-center items-center w-full h-full">
                <div class="flex justify-center items-center space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-[#1E2A47] via-[#4E5D77] to-[#7F8CA3] rounded-full animate-pulse"></div>
                    <div class="w-12 h-12 bg-gradient-to-r from-[#1E2A47] via-[#4E5D77] to-[#7F8CA3] rounded-full animate-pulse delay-200"></div>
                    <div class="w-12 h-12 bg-gradient-to-r from-[#1E2A47] via-[#4E5D77] to-[#7F8CA3] rounded-full animate-pulse delay-400"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading

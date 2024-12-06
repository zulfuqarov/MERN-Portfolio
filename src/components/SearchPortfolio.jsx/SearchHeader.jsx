import React from 'react'

const SearchHeader = () => {
    return (
        <div className="py-10 md:py-10 lg:py-10 bg-[#020617]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text drop-shadow-lg shadow-orange-500">
                My Portfolio
            </h1>
            <p className="text-slate-400 max-w-xs md:max-w-sm lg:max-w-md mx-auto text-center pt-6 md:pt-8 lg:pt-10 text-sm md:text-base lg:text-lg">
                Search for projects, skills, or people by typing in the search bar above. Click on the "Search" button to find your desired content.
            </p>
        </div>
    )
}

export default SearchHeader

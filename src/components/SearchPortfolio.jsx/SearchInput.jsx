import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../../context/ContextPorfolio'
import { Link } from 'react-router-dom'
const SearchInput = () => {

    const { searchPortfolioFunc, searchPortfolio } = useContext(PortfolioContext)

    const [searchInput, setsearchInput] = useState("")
    const handleSearchInput = (e) => {
        setsearchInput(e.target.value)
    }

    return (
        <div className="space-y-8 max-w-xl mx-auto p-6">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-center p-6 space-y-4 md:space-y-0 md:space-x-4 bg-[#1e293b] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
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
                        onChange={handleSearchInput}
                        value={searchInput}
                        className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                        type="text"
                        placeholder="Article name or keyword..."
                    />
                </div>
                <button
                    onClick={() => {
                        searchPortfolioFunc(searchInput)
                    }}
                    className="bg-[#475569] py-3 px-6 text-white font-semibold rounded-lg hover:shadow-lg hover:bg-[#64748b] transition duration-300">
                    Search
                </button>
            </div>

            {/* Search Results */}
            <div className="bg-[#1e293b] rounded-xl p-4 space-y-4 shadow-lg">
                <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Search Results</h3>
                <div className="space-y-4 max-h-[365px] overflow-auto">
                    {
                        searchPortfolio.length > 0 ?
                            searchPortfolio.map((oneMap, index) => (
                                <div key={index} className="flex justify-between items-center bg-[#334155] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div>
                                        <p className="text-white font-medium">{oneMap.userName}</p>
                                        <p className="text-gray-400 text-sm">{oneMap.position}</p>
                                    </div>
                                    <Link
                                        to={`/Portfolio-By/${oneMap.userName}?id=${oneMap._id}`}
                                        className="text-[#FACC15] font-semibold hover:underline transition duration-300">
                                        Visit
                                    </Link>
                                </div>
                            )) : <p className='text-center text-red-500'>No Results</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchInput

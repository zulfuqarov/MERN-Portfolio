import React from 'react'
import SearchHeader from '../components/SearchPortfolio.jsx/SearchHeader'
import SearchInput from '../components/SearchPortfolio.jsx/SearchInput'
import AboutPage from '../components/AboutPage'

const SearchPortfolio = () => {
    return (
        <div className='mx-auto container py-[80px]'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <SearchHeader />
                <SearchInput />
                <AboutPage />
            </div>
        </div>
    )
}

export default SearchPortfolio
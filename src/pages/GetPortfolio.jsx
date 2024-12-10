import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
const GetPortfolio = () => {
    const { name } = useParams()
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id"); // Query param olarak taşınan ID alınıyor

    return (
        <div className='text-red-500'>GetPortfolio : {name} {id}</div>
    )
}

export default GetPortfolio
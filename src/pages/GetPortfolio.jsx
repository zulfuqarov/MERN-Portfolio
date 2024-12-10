import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { PortfolioContext } from '../context/ContextPorfolio'

import apiClient from '../api';

import MyPortfolioHeader from '../components/MyPortfolio/MyPortfolioHeader';
import MyPortfolioAboutMe from '../components/MyPortfolio/MyPortfolioAboutMe';
import MyPortfolioService from '../components/MyPortfolio/MyPortfolioService';
import MyPortfolioPortfolio from '../components/MyPortfolio/MyPortfolioPortfolio';
import MyPortfolioExperience from '../components/MyPortfolio/MyPortfolioExperience';
import MyPortfolioContact from '../components/MyPortfolio/MyPortfolioContact';
import MyPotfolioFotter from '../components/MyPortfolio/MyPotfolioFotter';
import Loading from '../components/Loading';

const GetPortfolio = () => {
    const { name } = useParams()
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const [portfolioData, setportfolioData] = useState({})
    const getPortfolioFunc = async (ids) => {
        try {
            const response = await apiClient.get(`/Portfolio/GetPortfolio/${ids}`)
            console.log(response.data)
            setportfolioData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPortfolioFunc(id)
    }, [id])



    if (Object.keys(portfolioData).length > 0) {
        return (
            portfolioData.edit ?
                <div>
                    <MyPortfolioHeader portfolioData={portfolioData} />
                    <MyPortfolioAboutMe portfolioData={portfolioData} />
                    <MyPortfolioService portfolioData={portfolioData} />
                    <MyPortfolioPortfolio portfolioData={portfolioData} />
                    <MyPortfolioExperience portfolioData={portfolioData} />
                    <MyPortfolioContact portfolioData={portfolioData} />
                    <MyPotfolioFotter portfolioData={portfolioData} />
                </div> :
                <div className="w-full h-screen flex justify-center items-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-600 py-8">
                        Portfolio no active
                    </h1>
                </div>

        )
    } else {
        return <Loading />
    }

}

export default GetPortfolio
import React, { useContext, useEffect } from 'react'
import { PortfolioContext } from '../context/ContextPorfolio'
import { useNavigate, Link } from "react-router-dom";

import MyPortfolioHeader from '../components/MyPortfolio/MyPortfolioHeader';
import MyPortfolioAboutMe from '../components/MyPortfolio/MyPortfolioAboutMe';
import MyPortfolioService from '../components/MyPortfolio/MyPortfolioService';
import MyPortfolioPortfolio from '../components/MyPortfolio/MyPortfolioPortfolio';
import MyPortfolioExperience from '../components/MyPortfolio/MyPortfolioExperience';
import MyPortfolioContact from '../components/MyPortfolio/MyPortfolioContact';
import MyPotfolioFotter from '../components/MyPortfolio/MyPotfolioFotter';

const MyPorfolio = () => {
    const navigate = useNavigate()
    const { portfolioData } = useContext(PortfolioContext)

    useEffect(() => {
        if (!portfolioData.edit) {
            navigate('/Edit')
        }
    }, [])

    return (
        <div>
            <MyPortfolioHeader portfolioData={portfolioData} />
            <MyPortfolioAboutMe portfolioData={portfolioData}/>
            <MyPortfolioService portfolioData={portfolioData}/>
            <MyPortfolioPortfolio portfolioData={portfolioData}/>
            <MyPortfolioExperience portfolioData={portfolioData}/>
            <MyPortfolioContact portfolioData={portfolioData}/>
            <MyPotfolioFotter portfolioData={portfolioData}/>
        </div>
    )
}

export default MyPorfolio

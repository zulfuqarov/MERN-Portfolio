import React, { useContext, useEffect } from 'react'
import { PortfolioContext } from '../context/ContextPorfolio'
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import MyPortfolioHeader from '../components/MyPortfolio/MyPortfolioHeader';
import MyPortfolioAboutMe from '../components/MyPortfolio/MyPortfolioAboutMe';
import MyPortfolioService from '../components/MyPortfolio/MyPortfolioService';
import MyPortfolioPortfolio from '../components/MyPortfolio/MyPortfolioPortfolio';

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
            <MyPortfolioHeader />
            <MyPortfolioAboutMe />
            <MyPortfolioService />
            <MyPortfolioPortfolio/>
        </div>
    )
}

export default MyPorfolio
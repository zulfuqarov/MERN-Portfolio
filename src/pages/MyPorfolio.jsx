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
import Button from '../components/Button';
import { toast } from 'react-toastify';

const MyPorfolio = () => {
    const navigate = useNavigate()
    const { portfolioData } = useContext(PortfolioContext)

    useEffect(() => {
        if (!portfolioData.edit) {
            navigate('/Edit')
        }
    }, [])

    const ShareFunc = async (name, id) => {
        const text = `https://portfolio.nabi.net.tr/Portfolio-By/${name}?id=${id}`;
        try {
            // Metni panoya kopyala
            await navigator.clipboard.writeText(text);
            console.log("Metin panoya başarıyla kopyalandı:", text);
            toast.success("The link has been copied to the clipboard!")
        } catch (err) {
            console.error("Metni kopyalama sırasında bir hata oluştu:", err);
            alert("Kopyalama başarısız oldu. Tarayıcınız desteklemiyor olabilir.");
        }
    };



    return (
        <div className='relative'>
            <MyPortfolioHeader portfolioData={portfolioData} />
            <MyPortfolioAboutMe portfolioData={portfolioData} />
            <MyPortfolioService portfolioData={portfolioData} />
            <MyPortfolioPortfolio portfolioData={portfolioData} />
            <MyPortfolioExperience portfolioData={portfolioData} />
            <MyPortfolioContact portfolioData={portfolioData} />
            <MyPotfolioFotter portfolioData={portfolioData} />
            <div className='fixed bottom-[80px] right-[30px] z-50'>
                <Button func={() => ShareFunc(portfolioData.userName, portfolioData._id)} text="Share" classProps="hover:bg-white hover:text-black" />
            </div>
        </div>
    )
}

export default MyPorfolio

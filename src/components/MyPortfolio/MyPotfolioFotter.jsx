import React, { useState, useContext } from 'react'
import instagram from '../../Assets/Img/instagram.svg'
import facebook from '../../Assets/Img/facebook.svg'
import youtube from '../../Assets/Img/yotube.svg'
import linkedin from '../../Assets/Img/linkedin.svg'
import twitter from '../../Assets/Img/twitter.svg'
import { PortfolioContext } from '../../context/ContextPorfolio'


const socialMediaImages = {
    instagram: instagram,
    facebook: facebook,
    twitter: twitter,
    linkedin: linkedin,
    youtube: youtube
};

const MyPotfolioFotter = ({ portfolioData }) => {
    // const { portfolioData } = useContext(PortfolioContext)
    const { socialMedia, footerAboutDescription } = portfolioData
    return (
        <div className='mx-auto container h-[100%] py-[60px]'>
            <div className='flex justify-center items-center flex-col'>
                <div className='w-[500px] max-[768px]:w-[300px] text-center flex flex-col justify-start items-center '>
                    <p className='text-[42px] font-bold text-white'>About <span className='text-[#EAB308]'>Me.</span></p>
                    <div className='pt-[20px]'>
                        {
                            <span className='leading-[30px] text-[#9CA3AF]'>
                                {
                                    footerAboutDescription ? footerAboutDescription :
                                        " write you own About description"
                                }
                            </span>
                        }
                    </div>
                </div>

                <div className="flex w-[300px] justify-between pt-[40px] relative">

                    {
                        socialMedia &&
                        socialMedia.map((oneMap, index) => (
                            oneMap.url !== '' ?
                                <a target="_blank"
                                    href={`${oneMap.url}`} className='flex flex-col' key={index}>
                                    <img src={socialMediaImages[oneMap.name]} alt="" />
                                </a> : ''
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default MyPotfolioFotter

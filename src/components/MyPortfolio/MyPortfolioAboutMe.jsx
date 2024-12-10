import React, { useContext } from 'react'
import { PortfolioContext } from '../../context/ContextPorfolio'
import Button from '../Button'

const MyPortfolioAboutMe = ({portfolioData}) => {
    // const { portfolioData } = useContext(PortfolioContext)
    const { aboutMeDescription, aboutMeImg } = portfolioData
    return (
        <div>
            <div className=" w-full my-[30px]">
                <div className="container mx-auto h-auto md:h-[619px] px-4">
                    <div className="flex flex-col md:flex-row justify-around items-center h-full w-full">


                        <div className="w-full h-[427px] md:w-[427px] flex justify-center max-[768px]:order-1 max-[768px]:mt-[30px]"
                            style={{
                                backgroundImage: `url(${aboutMeImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                        </div>

                        <div className="flex flex-col justify-between max-[768px]:justify-evenly min-h-[300px] text-center md:text-left mb-6 md:mb-0 md:w-[466px]">
                            <div className=" w-full">
                                <h1 className="text-white font-bold text-[28px] md:text-[42px]">About <span>Me</span></h1>
                            </div>
                            <div>
                                {
                                    <p className="text-[#6B7280] text-[15px] md:text-[17px] leading-[24px] md:leading-[30px] max-[768px]:pt-[10px]">
                                        {aboutMeDescription ? aboutMeDescription :
                                            " write you own About Me description"
                                        }
                                    </p>
                                }

                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolioAboutMe

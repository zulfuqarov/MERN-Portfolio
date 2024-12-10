import React, { useContext } from 'react'
import { PortfolioContext } from '../../context/ContextPorfolio'

const MyPortfolioPortfolio = ({portfolioData}) => {
    // const { portfolioData } = useContext(PortfolioContext)
    const { myPortfolio, myPortfolioDescription } = portfolioData
    return (

        <div className="mx-auto container px-4">
            <div className='w-full flex flex-col justify-center items-center py-[30px]'>
                <div className='w-[430px] text-center flex flex-col justify-start items-center '>
                    <p className='text-[42px] font-bold text-white'>My <span className='text-[#EAB308]'>Portfolio</span></p>
                    <div>
                        {
                            <span className='leading-[30px] text-[#9CA3AF]'>
                                {myPortfolioDescription ? myPortfolioDescription :
                                    " write you own portfolio description"
                                }
                            </span>
                        }
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    {
                        myPortfolio.length > 0 &&
                        <div className="h-64 md:h-[565px]">
                            <div
                                className="flex items-center justify-center w-full h-full rounded-lg"
                                style={{
                                    backgroundImage: `url(${myPortfolio[0].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                        </div>
                    }

                    {
                        myPortfolio.length > 1 &&
                        <div className="grid grid-cols-2 gap-4">
                            {myPortfolio.slice(1).map((portfolioImg, index) => (
                                <div key={index} className="h-32 md:h-[265px]">
                                    <div
                                        className="flex items-center justify-center w-full h-full rounded-lg"
                                        style={{
                                            backgroundImage: `url(${portfolioImg.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default MyPortfolioPortfolio
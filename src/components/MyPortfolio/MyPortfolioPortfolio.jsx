import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../../context/ContextPorfolio'

const MyPortfolioPortfolio = ({ portfolioData }) => {
    // const { portfolioData } = useContext(PortfolioContext)
    const { myPortfolio, myPortfolioDescription } = portfolioData

    const [showImg, setshowImg] = useState({
        show: false,
        img: '',
    })
    const openModalImg = (img) => {
        setshowImg({
            show: !showImg.show,
            img: img,
        })
    }

    return (

        <div className="mx-auto container px-4">

            <div className='w-full flex flex-col justify-center items-center py-[30px]'>
                <div className='w-[350px] text-center flex flex-col justify-start items-center '>
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
                            <button
                                onClick={() => {
                                    openModalImg(myPortfolio[0].image)
                                }}
                                className="flex items-center justify-center w-full h-full rounded-lg"
                                style={{
                                    backgroundImage: `url(${myPortfolio[0].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></button>
                        </div>
                    }

                    {
                        myPortfolio.length > 1 &&
                        <div className="grid grid-cols-2 gap-4">
                            {myPortfolio.slice(1).map((portfolioImg, index) => (
                                <button
                                    onClick={() => {
                                        openModalImg(portfolioImg.image)
                                    }}
                                    key={index} className="h-32 md:h-[265px]">
                                    <div
                                        className="flex items-center justify-center w-full h-full rounded-lg"
                                        style={{
                                            backgroundImage: `url(${portfolioImg.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    ></div>
                                </button>
                            ))}
                        </div>
                    }
                </div>
            </div>


            {
                showImg.show && <div className="fixed inset-0 z-[99]  bg-black bg-opacity-50 ">
                    <div className="relative flex flex-col items-center justify-around bg-white/30 backdrop-blur-md rounded-lg shadow-lg w-full h-full">
                        {/* Modal header */}
                        <div className="flex justify-between items-center p-4 border-b w-full">
                            <h3 className="text-lg font-semibold text-white">Image Preview</h3>
                            <button
                                onClick={() => openModalImg()}
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                            >
                                Close
                            </button>
                        </div>

                        <div className="max-w-[1300px] max-h-[600px]">
                            <img
                                src={showImg.img}
                                alt="Preview"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            }


        </div>

    )
}

export default MyPortfolioPortfolio
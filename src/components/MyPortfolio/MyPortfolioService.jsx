import React, { useContext } from 'react'
import { PortfolioContext } from '../../context/ContextPorfolio'

const MyPortfolioService = ({portfolioData}) => {
    // const { portfolioData } = useContext(PortfolioContext)
    const { service, serviceDescription } = portfolioData
    return (
        <div className="bg-[#111827] w-full break-words">
            <div className="container mx-auto py-[90px] px-4">
                <div className="w-full md:w-[445px] mb-8">
                    <p className="text-[32px] md:text-[42px] text-white font-bold">
                        My <span className="text-[#EAB308]">Service</span>
                    </p>

                    {
                        <span className="text-[#6B7280] leading-[24px] md:leading-[30px] inline-block py-4">
                            {serviceDescription ? serviceDescription :
                                " write you own Service description"
                            }
                        </span>
                    }
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
                    {
                        service &&
                        service.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#020617] p-6 text-center flex flex-col justify-center items-center rounded-[20px] md:rounded-[30px] min-h-[300px] md:min-h-[342px] relative group"
                            >
                                {/* Image Section */}
                                <div className="flex justify-center items-center w-[40px] h-[40px] cursor-pointer">

                                    <button className="relative !cursor-pointer w-full h-full">
                                        <div
                                            className="w-[40px] h-[40px] cursor-pointer"
                                            alt="Service"
                                            style={{
                                                backgroundImage: `url(${service.img && service.img})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        >
                                        </div>
                                    </button>

                                </div>


                                <div className="flex flex-col justify-between items-center">
                                    <div className="w-[150px] py-4">
                                        <p className="text-white text-lg md:text-[22px] font-bold">
                                            {service.name || "Service Name"}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-[286px]">
                                        <p className="text-[#6B7280] text-sm md:text-base leading-[24px] md:leading-[30px]">
                                            {service.description || "Service Description"}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default MyPortfolioService

import React, { useContext } from 'react'
import { PortfolioContext } from '../../context/ContextPorfolio'

const MyPortfolioExperience = ({portfolioData}) => {
    // const { portfolioData } = useContext(PortfolioContext)
    const { myExperiencesDescription, Experiences } = portfolioData
    return (
        <div className="bg-[#111827] w-full py-12 break-words ">
            <div className="container mx-auto px-6">
                <div className="w-full md:w-[445px] mb-8">
                    <p className="text-[32px] md:text-[42px] text-white font-bold">
                        My <span className="text-[#EAB308]">Experiences</span>
                    </p>
                    <div className='py-[30px]'>
                        {
                            <span className='leading-[30px] text-[#9CA3AF]'>
                                {myExperiencesDescription ? myExperiencesDescription :
                                    " write you own Experiences description"
                                }
                            </span>
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                    {
                        Experiences &&
                        Experiences.map((Experiences, index) => (
                            <div
                                key={index}
                                className="bg-[#020617] p-6 text-center flex flex-col justify-center items-center rounded-[20px] md:rounded-[30px] min-h-[320px] md:min-h-[350px] h-full relative group transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-[#1F2937]"
                            >
                                <div className="flex flex-col justify-evenly w-full h-full text-left space-y-4">
                                    <div className="py-4">
                                        <p className="text-[#EAB308] text-lg md:text-[26px] font-semibold">
                                            {Experiences.date ? Experiences.date.split("T")[0] : "Experiences date"}
                                        </p>
                                    </div>
                                    <div className="w-full py-4">
                                        <p className="text-white w-full h-full text-lg md:text-[26px] font-semibold">
                                            {Experiences.name || "Experiences Name"}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-[286px]">
                                        <p className="text-[#6B7280] w-full text-sm md:text-base leading-[24px] md:leading-[30px]">
                                            {Experiences.description || "Experiences Description"}
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

export default MyPortfolioExperience

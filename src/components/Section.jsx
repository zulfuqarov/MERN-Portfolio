import React, { useState, useContext } from 'react'
import ProfileImg from '../Assets/Img/ProfileImg.svg'
import Button from './Button'
import { PortfolioContext } from '../context/ContextPorfolio'

const Section = () => {
    const { portfolioData, seteditValue, editValue } = useContext(PortfolioContext)
    const { aboutMeDescription, aboutMeImg } = portfolioData

    // edit aboutMe description
    const [AboutMeDescription, setAboutMeDescription] = useState({
        show: false,
        description: aboutMeDescription
    })
    const handleAboutDescriptionChange = (event) => {
        setAboutMeDescription({
            ...AboutMeDescription,
            description: event.target.value
        })
    }
    const showAboutDescription = () => {

        if (AboutMeDescription.show) {
            seteditValue({
                ...editValue,
                aboutMeDescription: AboutMeDescription.description,
            })
        }

        setAboutMeDescription({
            ...AboutMeDescription,
            show: !AboutMeDescription.show,
        })
    }

    // add AbutMe img 
    const [AboutMeImg, setAboutMeImg] = useState(aboutMeImg)
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setAboutMeImg(URL.createObjectURL(file))
        seteditValue({
            ...editValue,
            aboutMeImg: file,
        })

        event.target.value = null;

    };

    return (
        <div className=" w-full my-[30px]">
            <div className="container mx-auto h-auto md:h-[619px] px-4">
                <div className="flex flex-col md:flex-row justify-around items-center h-full w-full">

                    <div className="w-full h-[427px] md:w-[427px] flex justify-center max-[768px]:order-1 max-[768px]:mt-[30px]">
                        <label
                            className="flex relative flex-col items-center justify-center w-full h-full border border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100"
                            style={{
                                backgroundImage: `url(${AboutMeImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <span className="text-[17px] text-gray-500">+</span>
                            <input
                                onChange={handleImageChange}
                                type="file"
                                accept="image/*"
                                className="absolute opacity-0 w-full h-full cursor-pointer"
                            />

                            {
                                AboutMeImg && AboutMeImg !== "https://ruvsp.ru/css/theme-InnoForum/img/emptyava.png" ?
                                    < button
                                        onClick={(event) => {
                                            event.preventDefault()
                                            setAboutMeImg("https://ruvsp.ru/css/theme-InnoForum/img/emptyava.png")
                                            seteditValue({
                                                ...editValue,
                                                aboutMeImg: "https://ruvsp.ru/css/theme-InnoForum/img/emptyava.png",
                                            })
                                        }}
                                        className="bg-red-500 hover:bg-red-600 w-[100px] h-[30px] text-[13px] text-white rounded absolute top-0 right-0 transition duration-300 ease-in-out z-50">
                                        delete
                                    </button> : ''
                            }

                        </label>
                    </div>

                    {/* <div className="w-full h-[427px] md:w-[427px] flex justify-center max-[768px]:order-1 max-[768px]:mt-[30px]"
                        style={{
                            backgroundImage: `url(${AboutMeImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                    </div> */}

                    <div className="flex flex-col justify-between max-[768px]:justify-evenly min-h-[300px] text-center md:text-left mb-6 md:mb-0 md:w-[466px]">
                        <div className=" w-full">
                            <h1 className="text-white font-bold text-[28px] md:text-[42px]">About <span>Me</span></h1>
                        </div>
                        <div>
                            {
                                AboutMeDescription.show
                                    ?
                                    <textarea
                                        value={AboutMeDescription.description || ""}
                                        onChange={handleAboutDescriptionChange}
                                        placeholder='write you own About Me description'
                                        className="w-[400px] leading-[30px] text-[#9CA3AF] bg-transparent border border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                                        rows="4"

                                    />
                                    :
                                    <p className="text-[#6B7280] text-[15px] md:text-[17px] leading-[24px] md:leading-[30px] max-[768px]:pt-[10px]">
                                        {AboutMeDescription.description ? AboutMeDescription.description :
                                            " write you own About Me description"
                                        }
                                    </p>
                            }
                            <div className="py-[20px]">
                                {
                                    AboutMeDescription.show
                                        ?
                                        <button
                                            onClick={showAboutDescription}
                                        >

                                            <i className="fa-solid fa-check text-green-500 text-[17px] cursor-pointer"></i>
                                        </button>
                                        :
                                        <button
                                            onClick={showAboutDescription}
                                        >
                                            <i className="fa-solid fa-pen text-[#6B7280] text-[17px] cursor-pointer"></i>
                                        </button>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section
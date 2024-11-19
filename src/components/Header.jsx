import React, { useState } from 'react'
import ProfileImg from '../Assets/Img/ProfileImg.svg'
import Button from './Button'
const Header = () => {
    // edit portfolio description
    const [AboutDescription, setaboutDescription] = useState({
        show: false,
        description: 'There are many variations of passages ofLorem Ipsum available, but the majority havesuffered alteration in some form, by injected humour'
    })
    const handleAboutDescriptionChange = (event) => {
        setaboutDescription({
            ...AboutDescription,
            description: event.target.value
        })
    }
    const showAboutDescription = () => {
        setaboutDescription({
            ...AboutDescription,
            show: !AboutDescription.show,
        })
    }

    // add Header img 

    const [portfolioImg, setPortfolioImg] = useState()
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setPortfolioImg(URL.createObjectURL(file))

    };

    return (
        <div className="bg-[#111827] w-full my-[30px]">
            <div className="container mx-auto h-auto md:h-[619px] px-4">
                <div className="flex flex-col md:flex-row justify-around items-center h-full w-full">
                    <div className="flex flex-col justify-between max-[768px]:justify-evenly min-h-[271px] text-center md:text-left mb-6 md:mb-0 max-[768px]:order-2">
                        <div>
                            <span className="text-[#EAB308] text-[16px] md:text-[18px]">Hello, Welcome</span>
                        </div>
                        <div className="md:w-[466px] w-full">
                            <h1 className="text-white font-bold text-[28px] md:text-[42px]">I’m Anderson Coper</h1>

                            {
                                AboutDescription.show
                                    ?
                                    <textarea
                                        value={AboutDescription.description || ""}
                                        onChange={handleAboutDescriptionChange}
                                        placeholder='write you own About description'
                                        className="w-[400px] leading-[30px] text-[#9CA3AF] bg-transparent border border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                                        rows="4"

                                    />
                                    :
                                    <p className="text-[#6B7280] text-[15px] md:text-[17px] leading-[24px] md:leading-[30px] max-[768px]:pt-[10px]">
                                        {AboutDescription.description ? AboutDescription.description :
                                            " write you own About description"
                                        }
                                    </p>
                            }
                            <div className="py-[20px]">
                                {
                                    AboutDescription.show
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
                        <div>
                            <Button text="Contact Us" />
                        </div>
                    </div>
                    <div className="w-full h-[427px] md:w-[427px] flex justify-center max-[768px]:order-1 max-[768px]:mt-[30px]">

                        <label
                            className="flex relative flex-col items-center justify-center w-full h-full border border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100"
                            style={{
                                backgroundImage: `url(${portfolioImg})`,
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
                        </label>

                    </div>

                    {/* <div className="w-full h-[427px] md:w-[427px] flex justify-center max-[768px]:order-1 max-[768px]:mt-[30px]"
                        style={{
                            backgroundImage: `url(${portfolioImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Header
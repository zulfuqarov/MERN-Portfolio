import React, { useState } from 'react'
import Button from './Button'
import instagram from '../Assets/Img/instagram.svg'
import facebook from '../Assets/Img/facebook.svg'
import youtube from '../Assets/Img/yotube.svg'
import linkedin from '../Assets/Img/linkedin.svg'
import twitter from '../Assets/Img/twitter.svg'

import { Link } from 'react-router-dom'

const socialMediaImages = {
    instagram: instagram,
    facebook: facebook,
    twitter: twitter,
    linkedin: linkedin,
    youtube: youtube
};

const Footer = () => {
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

    const [dataFooter, setdataFooter] = useState({
        instagram: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        youtube: ''
    })

    const [hovered, setHovered] = useState(null); // hangi butonun üzerine gelindiğini tutuyoruz

    const [hoveredName, sethoveredName] = useState('')
    const handleHover = (name) => {
        sethoveredName(name)
    }
    const handleCheck = () => {
        sethoveredName('')
    }

    const handleChangeSocialMediaInput = (event) => {
        setdataFooter({
            ...dataFooter,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='mx-auto container h-[55vh]'>
            <div className='flex justify-center items-center flex-col'>
                <div className='w-[500px] max-[768px]:w-[300px] text-center flex flex-col justify-start items-center '>
                    <p className='text-[42px] font-bold text-white'>About <span className='text-[#EAB308]'>Me.</span></p>
                    <div className='pt-[20px]'>
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
                                <span className='leading-[30px] text-[#9CA3AF]'>
                                    {AboutDescription.description ? AboutDescription.description :
                                        " write you own About description"
                                    }
                                </span>
                        }
                        <div className="pt-[20px]">
                            {
                                AboutDescription.show
                                    ?
                                    <button
                                        onClick={showAboutDescription}
                                    >

                                        <i class="fa-solid fa-check text-green-500 text-[17px] cursor-pointer"></i>
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

                <div className="flex w-[300px] justify-between pt-[40px] relative">

                    {
                        hoveredName ?
                            <div className='absolute w-full flex'>
                                <input
                                    onChange={handleChangeSocialMediaInput}
                                    value={dataFooter[hoveredName]}
                                    name={hoveredName}
                                    placeholder={`enter your ${hoveredName} url`}
                                    className='w-full h-[50px] text-[16px] font-semibold px-[15px] bg-[#1F2937] text-white placeholder:text-slate-400 placeholder:text-[15px]' type="text" />
                                <button
                                    onClick={handleCheck}
                                >
                                    <i className="pl-[15px] fa-solid fa-check text-green-500 text-[18px]"></i>
                                </button>
                            </div>
                            : <div className='flex w-full justify-between '>
                                <button
                                    onClick={() => handleHover('facebook')}
                                    onMouseEnter={() => setHovered('facebook')}
                                    onMouseLeave={() => setHovered(null)}
                                    className="relative">
                                    {hovered === 'facebook' ? (
                                        <i className="fas fa-pen text-xl text-slate-400" />
                                    ) : (
                                        <img src={facebook} alt="Facebook" />
                                    )}
                                </button>

                                <button
                                    onClick={() => handleHover('linkedin')}
                                    onMouseEnter={() => setHovered('linkedin')}
                                    onMouseLeave={() => setHovered(null)}
                                    className="relative">
                                    {hovered === 'linkedin' ? (
                                        <i className="fas fa-pen text-xl text-slate-400" />
                                    ) : (
                                        <img src={linkedin} alt="LinkedIn" />
                                    )}
                                </button>

                                <button
                                    onClick={() => handleHover('youtube')}
                                    onMouseEnter={() => setHovered('youtube')}
                                    onMouseLeave={() => setHovered(null)}
                                    className="relative">
                                    {hovered === 'youtube' ? (
                                        <i className="fas fa-pen text-xl text-slate-400" />
                                    ) : (
                                        <img src={youtube} alt="YouTube" />
                                    )}
                                </button>

                                <button
                                    onClick={() => handleHover('instagram')}
                                    onMouseEnter={() => setHovered('instagram')}
                                    onMouseLeave={() => setHovered(null)}
                                    className="relative">
                                    {hovered === 'instagram' ? (
                                        <i className="fas fa-pen text-xl text-slate-400" />
                                    ) : (
                                        <img src={instagram} alt="Instagram" />
                                    )}
                                </button>

                                <button
                                    onClick={() => handleHover('twitter')}
                                    onMouseEnter={() => setHovered('twitter')}
                                    onMouseLeave={() => setHovered(null)}
                                    className="relative">
                                    {hovered === 'twitter' ? (
                                        <i className="fas fa-pen text-slate-400 text-xl" />
                                    ) : (
                                        <img src={twitter} alt="Twitter" />
                                    )}
                                </button>
                            </div>

                    }


                    {
                        Object.keys(dataFooter).map((oneMap, index) => (
                            dataFooter[oneMap] &&
                            <a target="_blank"  // Yeni sekmede açılmasını sağlar
                                href={`${dataFooter[oneMap]}`} className='flex flex-col' key={index}>
                                <img src={socialMediaImages[oneMap]} alt="" />
                            </a>
                        ))
                    }


                </div>

            </div>
        </div>
    )
}

export default Footer

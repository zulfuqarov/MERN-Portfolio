import React, { useState, useContext } from 'react'
import Button from './Button'
import { PortfolioContext } from '../context/ContextPorfolio'

const Contact = () => {

    const { portfolioData, seteditValue, editValue } = useContext(PortfolioContext)
    const { contactDescription, contactAddres, contactEmail, contactPhone, contactWebsite } = portfolioData

    // edit Contact description
    const [contactDescriptions, setcontactDescriptions] = useState({
        show: false,
        description: contactDescription
    })
    const handlePortfolioDescriptionChange = (event) => {
        setcontactDescriptions({
            ...contactDescriptions,
            description: event.target.value
        })
    }
    const showPortfolioDescription = () => {

        if (contactDescriptions.show) {
            seteditValue({
                ...editValue,
                contactDescription: contactDescriptions.description
            })
        }

        setcontactDescriptions({
            ...contactDescriptions,
            show: !contactDescriptions.show,
        })
    }


    const [data, setdata] = useState([
        {
            contactAddres: contactAddres
        },
        {
            contactPhone: contactPhone
        },
        {
            contactEmail: contactEmail
        },
        {
            contactWebsite: contactWebsite
        }
    ])

    const [editShow, seteditShow] = useState({
        index: '',
        show: false
    })
    const editAdress = (index, name) => {

        if (editShow.index === index && editShow.show) {
            seteditValue({
                ...editValue,
                [name]: data[index][name],
            })
        }

        seteditShow({
            index,
            show: !editShow.show
        })

        if (editShow.index !== index) {
            seteditShow({
                index,
                show: true
            })
        }
    }

    const handleChangeContactInput = (event, index) => {
        const name = event.target.name
        setdata([
            ...data,
            data[index][name] = event.target.value
        ])
    }

    return (
        <div className="mx-auto container px-4">
            <div className='w-full flex flex-col justify-center items-center py-[30px]'>
                <div className='w-[430px] text-center flex flex-col justify-start items-center '>
                    <p className='text-[42px] font-bold text-white'>Contact <span className='text-[#EAB308]'>Me</span></p>
                    <div className='pt-[20px]'>
                        {
                            contactDescriptions.show
                                ?
                                <textarea
                                    value={contactDescriptions.description || ""}
                                    onChange={handlePortfolioDescriptionChange}
                                    placeholder='write you own contact description'
                                    className="w-[400px] leading-[30px] text-[#9CA3AF] bg-transparent border border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                                    rows="4"

                                />
                                :
                                <span className='leading-[30px] text-[#9CA3AF]'>
                                    {contactDescriptions.description ? contactDescriptions.description :
                                        " write you own contact description"
                                    }
                                </span>
                        }
                        <div className="pt-[20px]">
                            {
                                contactDescriptions.show
                                    ?
                                    <button
                                        onClick={showPortfolioDescription}
                                    >

                                        <i class="fa-solid fa-check text-green-500 text-[17px] cursor-pointer"></i>
                                    </button>
                                    :
                                    <button
                                        onClick={showPortfolioDescription}
                                    >
                                        <i className="fa-solid fa-pen text-[#6B7280] text-[17px] cursor-pointer"></i>
                                    </button>
                            }

                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between items-left w-full py-[50px]'>

                    <div className='flex flex-col justify-between items-left lg:h-[200px] space-y-6 max-[1024px]:pb-[40px]'>
                        <div className='flex flex-wrap items-center font-bold text-[19px]'>
                            <p className='text-[#EAB308] pr-[10px]'>Address _</p>
                            {
                                editShow.index === "0" && editShow.show
                                    ? <input
                                        value={data[0].contactAddres}
                                        onChange={(event) => handleChangeContactInput(event, 0)}
                                        name="contactAddres"
                                        type="text"
                                        placeholder="Address"
                                        class="w-64 px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 bg-[#1F2937] text-white shadow transition duration-200 placeholder:text-slate-400"
                                    />
                                    :
                                    <span className='text-white font-medium text-[17px]'>{data[0].contactAddres || "------"}</span>
                            }

                            {
                                editShow.index === "0" && editShow.show
                                    ?
                                    <button
                                        onClick={() => editAdress("0", "contactAddres")}
                                    >
                                        <i className="fa-solid pl-[20px] fa-check text-green-500 text-[17px] cursor-pointer"></i>
                                    </button>
                                    :
                                    <button
                                        onClick={() => editAdress("0", "contactAddres")}
                                    >
                                        <i className="fa-solid pl-[20px] fa-pen text-[#6B7280] text-[17px] cursor-pointer"></i>
                                    </button>
                            }
                        </div>
                        <div className='flex flex-wrap items-center font-bold text-[19px]'>
                            <p className='text-[#EAB308] pr-[10px]'>Phone _</p>
                            {
                                editShow.index === "1" && editShow.show
                                    ? <input
                                        value={data[1].contactPhone}
                                        onChange={(event) => handleChangeContactInput(event, 1)}
                                        name="contactPhone"
                                        type="tel"
                                        placeholder="Phone"
                                        class="w-64 px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 bg-[#1F2937] text-white shadow transition duration-200 placeholder:text-slate-400"
                                    />
                                    :
                                    <span className='text-white font-medium text-[17px]'>{data[1].contactPhone || "------"}</span>
                            }
                            {
                                editShow.index === "1" && editShow.show
                                    ?
                                    <button
                                        onClick={() => editAdress("1", "contactPhone")}
                                    >
                                        <i className="fa-solid pl-[20px] fa-check text-green-500 text-[17px] cursor-pointer"></i>
                                    </button>
                                    :
                                    <button
                                        onClick={() => editAdress("1", "contactPhone")}
                                    >
                                        <i className="fa-solid pl-[20px] fa-pen text-[#6B7280] text-[17px] cursor-pointer"></i>
                                    </button>
                            }
                        </div>
                        <div className='flex flex-wrap items-center font-bold text-[19px]'>
                            <p className='text-[#EAB308] pr-[10px]'>E mail _</p>
                            {
                                editShow.index === "2" && editShow.show
                                    ? <input
                                        value={data[2].contactEmail}
                                        onChange={(event) => handleChangeContactInput(event, 2)}
                                        name="contactEmail"
                                        type="contactEmail"
                                        placeholder="Email"
                                        class="w-64 px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 bg-[#1F2937] text-white shadow transition duration-200 placeholder:text-slate-400"
                                    />
                                    :
                                    <span className='text-white font-medium text-[17px]'>{data[2].contactEmail || "------"}</span>
                            }
                            {
                                editShow.index === "2" && editShow.show
                                    ?
                                    <button
                                        onClick={() => editAdress("2", "contactEmail")}
                                    >
                                        <i className="fa-solid pl-[20px] fa-check text-green-500 text-[17px] cursor-pointer"></i>
                                    </button>
                                    :
                                    <button
                                        onClick={() => editAdress("2", "contactEmail")}
                                    >
                                        <i className="fa-solid pl-[20px] fa-pen text-[#6B7280] text-[17px] cursor-pointer"></i>
                                    </button>
                            }
                        </div>
                        <div className='flex flex-wrap items-center font-bold text-[19px]'>
                            <p className='text-[#EAB308] pr-[10px]'>Website _</p>
                            {
                                editShow.index === "3" && editShow.show
                                    ? <input
                                        value={data[3].contactWebsite}
                                        onChange={(event) => handleChangeContactInput(event, 3)}
                                        name="contactWebsite"
                                        type="text"
                                        placeholder="Website"
                                        class="w-64 px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 bg-[#1F2937] text-white shadow transition duration-200 placeholder:text-slate-400"
                                    />
                                    :
                                    <span className='text-white font-medium text-[17px]'>{data[3].contactWebsite || "------"}</span>
                            }
                            {
                                editShow.index === "3" && editShow.show
                                    ?
                                    <button
                                        onClick={() => editAdress("3", "contactWebsite")}
                                    >
                                        <i className="fa-solid pl-[20px] fa-check text-green-500 text-[17px] cursor-pointer"></i>
                                    </button>
                                    :
                                    <button
                                        onClick={() => editAdress("3", "contactWebsite")}
                                    >
                                        <i className="fa-solid pl-[20px] fa-pen text-[#6B7280] text-[17px] cursor-pointer"></i>
                                    </button>
                            }
                        </div>
                    </div>

                    <div className='flex flex-col justify-between pt-[40px] lg:pt-0 items-left space-y-4 lg:space-y-6 h-auto w-full lg:w-[540px]'>
                        <div>
                            <input name='name' placeholder='Name' type="text" className='w-full lg:w-[350px] h-[60px] bg-[#1F2937] text-white font-bold text-[18px] px-[15px] placeholder:text-white' />
                        </div>
                        <div>
                            <textarea className='w-full h-[160px] bg-[#1F2937] pt-[20px] text-white font-bold text-[18px] px-[15px] placeholder:text-white' name="Message" placeholder='Message '  ></textarea>
                        </div>
                        <div>
                            <Button text="Contact Us" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact




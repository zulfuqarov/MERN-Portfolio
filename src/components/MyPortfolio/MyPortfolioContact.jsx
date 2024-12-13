import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../../context/ContextPorfolio'
import Button from '../Button'
import { toast } from 'react-toastify'
import apiClient from '../../api'

const MyPortfolioContact = ({ portfolioData }) => {
    // const { portfolioData } = useContext(PortfolioContext)
    const { contactDescription, contactAddres, contactEmail, contactPhone, contactWebsite, userName } = portfolioData
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

    const [contactInput, setcontactInput] = useState({
        name: userName,
        senderName: '',
        to: contactEmail,
        htmltext: ''
    })


    const handleChangeContactInput = (e) => {
        setcontactInput({
            ...contactInput,
            [e.target.name]: e.target.value
        })
    }

    const sendMail = async () => {
        try {
            const response = await apiClient.get(`/Email?to=${contactInput.to}&name=${contactInput.name}&htmltext=${contactInput.htmltext}&senderName=${contactInput.senderName}`)
            console.log(response.data)
            toast.success("Email sent successfully")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className="mx-auto container px-4">
            <div className='w-full flex flex-col justify-center items-center py-[30px]'>
                <div className='w-[350px] text-center flex flex-col justify-start items-center '>
                    <p className='text-[42px] font-bold text-white'>Contact <span className='text-[#EAB308]'>Me</span></p>
                    <div className='pt-[20px]'>
                        {
                            <span className='leading-[30px] text-[#9CA3AF]'>
                                {contactDescription ? contactDescription :
                                    " write you own contact description"
                                }
                            </span>
                        }
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between items-left w-full py-[50px]'>

                    <div className='flex flex-col justify-between items-left lg:h-[200px] space-y-6 max-[1024px]:pb-[40px]'>
                        <div className='flex flex-wrap items-center font-bold text-[19px]'>
                            <p className='text-[#EAB308] pr-[10px]'>Address _</p>
                            {
                                <span className='text-white font-medium text-[17px]'>{data[0].contactAddres || "------"}</span>
                            }

                        </div>
                        <div className='flex flex-wrap items-center font-bold text-[19px]'>
                            <p className='text-[#EAB308] pr-[10px]'>Phone _</p>
                            {
                                <span className='text-white font-medium text-[17px]'>{data[1].contactPhone || "------"}</span>
                            }
                        </div>
                        <div className='flex flex-wrap items-center font-bold text-[19px]'>
                            <p className='text-[#EAB308] pr-[10px]'>E mail _</p>
                            {
                                <span className='text-white font-medium text-[17px]'>{data[2].contactEmail || "------"}</span>
                            }
                        </div>
                        <div className='flex flex-wrap items-center font-bold text-[19px]'>
                            <p className='text-[#EAB308] pr-[10px]'>Website _</p>
                            {
                                <span className='text-white font-medium text-[17px]'>{data[3].contactWebsite || "------"}</span>
                            }
                        </div>
                    </div>

                    <div className='flex flex-col justify-between pt-[40px] lg:pt-0 items-left space-y-4 lg:space-y-6 h-auto w-full lg:w-[540px]'>
                        <div>
                            <input
                                onChange={handleChangeContactInput}
                                value={contactInput.senderName}
                                name='senderName' placeholder='Name' type="text" className='w-full lg:w-[350px] h-[60px] bg-[#1F2937] text-white font-bold text-[18px] px-[15px] placeholder:text-white' />
                        </div>
                        <div>
                            <textarea
                                onChange={handleChangeContactInput}
                                value={contactInput.htmltext}
                                name='htmltext'
                                className='w-full h-[160px] bg-[#1F2937] pt-[20px] text-white font-bold text-[18px] px-[15px] placeholder:text-white' placeholder='Message '  ></textarea>
                        </div>
                        <div>
                            <Button func={() => {
                                sendMail()
                            }} text="Contact Us" />
                        </div>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default MyPortfolioContact
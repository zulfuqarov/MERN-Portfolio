import React from 'react'
import ProfileImg from '../Assets/Img/ProfileImg.svg'
import Button from './Button'
const Header = () => {
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
                            <p className="text-[#6B7280] text-[15px] md:text-[17px] leading-[24px] md:leading-[30px] max-[768px]:pt-[10px]">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                            </p>
                        </div>
                        <div>
                            <Button text="Contact Us" />
                        </div>
                    </div>
                    <div className="w-full md:w-[427px] flex justify-center max-[768px]:order-1 max-[768px]:mt-[30px]">
                        <img className="full" src={ProfileImg} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
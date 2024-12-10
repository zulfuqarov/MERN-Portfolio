import React, { useContext, useState } from 'react'
import Logo from '../Assets/Img/Logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import apiClient from '../api'
import Cookies from "js-cookie";
import { PortfolioContext } from '../context/ContextPorfolio';

const Navbar = () => {

    const { getPortfolio, setloading } = useContext(PortfolioContext)

    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false)


    const logOut = async () => {
        setloading(true)
        try {
            const response = await apiClient.post("/Auth/Logout")
            console.log(response.data)
            navigate("/Login", { replace: true })
        } catch (error) {
            console.log(error)
        }
        finally {
            setloading(false)
        }
    }


    if (!Cookies.get().jwtToken) {
        return (
            <div className="mx-auto container pt-[30px] px-4">
                <div className="flex justify-between items-center w-full">
                    <Link to="/">
                        <div>
                            <img src={Logo} alt="Logo" />
                        </div>
                    </Link>

                    <div className=" flex text-[#9CA3AF] justify-between items-center">
                        <button
                            onClick={() => getPortfolio()}
                            className='bg-[#FACC15] px-[10px] py-[7px] w-[100px] text-center rounded text-black font-semibold hover:text-white transition-all'
                        >
                            Start
                        </button>
                    </div>
                </div>

            </div>
        )
    }


    return (
        <div className="mx-auto container pt-[30px] px-4">
            <div className="flex justify-between items-center w-full">
                <Link to="/">
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                </Link>

                <div className="hidden md:flex text-[#9CA3AF]  items-center">
                    <Link to="/" className='px-3 inline-block' href="#">Search Portfolio</Link>
                    <Link className='px-3 inline-block' to="/MyPortfolio">MyPortfolio</Link>
                    <Link className='px-3 inline-block' href="#">Contact</Link>
                    <button
                        onClick={logOut}
                        className='bg-[#FACC15] text-[13px] mx-3 hover:text-white text-black p-[5px] rounded flex  justify-center items-center'
                    >
                        Logut
                        <i className="pl-[15px] fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>

                <div className="md:hidden">
                    <button className="text-[#9CA3AF] focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="flex flex-col mt-4 space-y-2 md:hidden  text-[#9CA3AF]">
                    <Link to="/" className='inline-block py-2' href="#">Search Portfolio</Link>
                    <Link className='py-2' to="/MyPortfolio">MyPortfolio</Link>
                    <Link className='py-2' href="#">Contact</Link>
                    <button
                        onClick={logOut}
                        className='bg-[#FACC15] text-[13px] hover:text-white text-black p-[5px] rounded flex  justify-center items-center'
                    >
                        Logut
                        <i className="pl-[15px] fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>
            )}
        </div>
    )
}

export default Navbar
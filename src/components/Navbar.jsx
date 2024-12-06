import React, { useState } from 'react'
import Logo from '../Assets/Img/Logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import apiClient from '../api'
const Navbar = () => {

    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false)


    const logOut = async () => {
        try {
            const response = await apiClient.post("/Auth/Logout")
            console.log(response.data)
            navigate("/Login", { replace: true })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="mx-auto container pt-[30px] px-4">
            <div className="flex justify-between items-center w-full">
                <Link to="/">
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                </Link>

                <div className="hidden md:flex text-[#9CA3AF] justify-between items-center w-[620px] max-[1024px]:w-[520px]">
                    <Link href="#">Home</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Service</Link>
                    <Link to="/MyPortfolio">MyPortfolio</Link>
                    <Link href="#">Resume</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Contact</Link>
                    <button
                        onClick={logOut}
                        className='bg-[#FACC15] text-[13px] hover:text-white text-black p-[5px] rounded flex  justify-center items-center'
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
                    <Link href="#">Home</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Service</Link>
                    <Link href="#">Portfolio</Link>
                    <Link href="#">Resume</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Contact</Link>
                </div>
            )}
        </div>
    )
}

export default Navbar
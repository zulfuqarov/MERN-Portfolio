import React, { useContext, useState, useEffect, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { PortfolioContext } from '../context/ContextPorfolio'
import Loading from '../components/Loading'
import Cookies from "js-cookie";

const positions = [
    { value: "frontend" },
    { value: "backend" },
    { value: "fullstack" },
    { value: "mobile" },
    { value: "data-scientist" },
    { value: "devops" },
    { value: "ui-ux" },
    { value: "game-dev" },
    { value: "ai-ml" },
    { value: "cybersecurity" },
    { value: "graphic-designer" },
    { value: "motion-designer" },
    { value: "visual-artist" },
    { value: "photographer" },
    { value: "videographer" },
    { value: "project-manager" },
    { value: "content-creator" },
    { value: "marketing-specialist" },
    { value: "seo-specialist" },
    { value: "creative-technologist" },
    { value: "problem-solver" },
    { value: "innovator" },
    { value: "lifelong-learner" },
    { value: "storyteller" },
    { value: "visionary-thinker" },
    { value: "aspiring-frontend" },
    { value: "junior-software" },
    { value: "creative-enthusiast" },
];



const Register = () => {

    const { Register, resgitserLodaing, portfolioData } = useContext(PortfolioContext)

    const [registerInput, setregisterInput] = useState({
        name: '',
        email: '',
        password: '',
        position: ''
    })
    const [error, seterror] = useState({})

    const handleInputChange = (event) => {
        setregisterInput({ ...registerInput, [event.target.name]: event.target.value })
    }

    const [showPosition, setshowPosition] = useState(false)

    const handleShowPosition = () => {
        setshowPosition(!showPosition)
    }

    const chosePosition = (data) => {
        setregisterInput({
            ...registerInput,
            position: data
        })
        setshowPosition(false)
    }

    const validationInput = () => {
        const newErrors = {};

        if (!registerInput.name || registerInput.name.length < 3 || !/^[a-zA-Z\s]+$/.test(registerInput.name)) {
            newErrors.name = 'Name should be at least 3 letters and contain only letters';
        }

        if (!registerInput.email || !/^\S+@\S+\.\S+$/.test(registerInput.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!registerInput.password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(registerInput.password)) {
            newErrors.password = 'Password must be 8+ chars, with uppercase, lowercase, number, and symbol.';
        }

        if (!registerInput.position) {
            newErrors.position = 'Choose a position.'
        }

        return newErrors;

    }

    if (resgitserLodaing) {
        return <Loading />
    }

    if (Cookies.get().jwtToken && portfolioData && portfolioData.edit) {
        return <Navigate to="/MyPortfolio" />;
    }
    if (Cookies.get().jwtToken && portfolioData && !portfolioData.edit) {
        return <Navigate to="/Edit" />;
    }

    const ref = useRef(null)



    useEffect(() => {

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setshowPosition(false);
            }
        }

        document.addEventListener('mousedown', (e) => {
            handleClickOutside(e)
        })

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [])

    return (
        <div >
            <div className="flex justify-end items-center p-4">
                <Link
                    to="/Login"
                    className="bg-yellow-400  text-[15px] text-black py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out"
                >
                    Login
                </Link>
            </div>

            <div className="flex min-h-full flex-col justify-center px-6 py-9 lg:px-8 bg-[#020617]">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="text-3xl text-center font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text drop-shadow-lg shadow-orange-500">
                        Portfolio
                    </h1>
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
                        Register in to your Portfolio
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6" >
                        <div>
                            <div ref={ref} className="relative  h-full w-full">
                                <button
                                    onClick={handleShowPosition}
                                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg w-full text-left hover:bg-gray-600">
                                    {
                                        registerInput.position ? registerInput.position : "Choose a position"
                                    }
                                </button>
                                {
                                    showPosition && <ul className="absolute bg-[#020617] text-gray-300 mt-2 w-full rounded-md shadow-lg h-[340px] overflow-y-auto">
                                        {
                                            positions &&
                                            positions.map((oneMap, index) => (

                                                <li onClick={() => chosePosition(oneMap.value)}
                                                    key={index} className="px-4 py-2 hover:bg-gray-600 cursor-pointer">{oneMap.value}</li>
                                            ))
                                        }
                                    </ul>
                                }
                            </div>
                            {
                                error.position ? <p className='text-red-500 text-[13px] pt-[7px] h-[25px]'>{error.position}</p> : ''
                            }
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-white"
                            >
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={handleInputChange}
                                    value={registerInput.name }
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required=""
                                    className="block w-full px-[10px] rounded-md border-0 py-2 text-white bg-[#2D3A56] placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-[#4E5D77] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                />
                                {
                                    error.name ? <p className='text-red-500 text-[13px] pt-[7px] h-[25px]'>{error.name}</p> : ''
                                }
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-white"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={handleInputChange}
                                    value={registerInput.email}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required=""
                                    className="block w-full px-[10px] rounded-md border-0 py-2 text-white bg-[#2D3A56] placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-[#4E5D77] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                />
                                {
                                    error.email ? <p className='text-red-500 text-[13px] pt-[7px] h-[25px]'>{error.email}</p> : ''
                                }
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-white"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={handleInputChange}
                                    value={registerInput.password}
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required=""
                                    className="block w-full px-[10px] rounded-md border-0 py-2 text-white bg-[#2D3A56] placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-[#4E5D77] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                />
                                <p>  {
                                    error.password ? <p className='text-red-500 text-[12px] pt-[7px] h-[25px]'>{error.password}</p> : ''
                                }</p>
                            </div>
                        </div>
                        <div className='pt-[20px]'>
                            <button
                                onClick={() => {
                                    const validationErrors = validationInput();
                                    seterror(validationErrors);
                                    if (Object.keys(validationErrors).length === 0) {
                                        Register(registerInput)
                                    }
                                }}
                                className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                            >
                                Register
                            </button>

                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Register
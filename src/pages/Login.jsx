import React, { useContext, useEffect, useState } from 'react'
import { PortfolioContext } from '../context/ContextPorfolio'
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const { Login } = useContext(PortfolioContext)

  const [loginInput, setloginInput] = useState({
    email: '',
    password: ''
  })

  const handleLogin = (event) => {
    setloginInput({
      ...loginInput,
      [event.target.name]: event.target.value
    })
  }





  if (Cookies.get().jwtToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#020617]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Login in to your Portfolio
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleLogin}
                value={loginInput.email}
                required=""
                className="block w-full rounded-md border-0 py-2 text-white bg-[#2D3A56] placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-[#4E5D77] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
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
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required=""
                onChange={handleLogin}
                value={loginInput.password}
                className="block w-full rounded-md border-0 py-2 text-white bg-[#2D3A56] placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-[#4E5D77] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                Login(loginInput)
              }}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Login
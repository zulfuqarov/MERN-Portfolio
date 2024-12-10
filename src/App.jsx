import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Loading from './components/Loading.jsx'
import Login from './pages/Login.jsx'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { navigateLogin } from "./api.js"

import { PortfolioContext } from './context/ContextPorfolio.jsx'
import Button from './components/Button.jsx'
import Error from './pages/Error.jsx'
import Register from './pages/Register.jsx'
import MyPorfolio from './pages/MyPorfolio.jsx'
import SearchPortfolio from './pages/SearchPortfolio.jsx'

import Cookies from "js-cookie";
import GetPortfolio from './pages/GetPortfolio.jsx'

const App = () => {
  const { loading, getPortfolio, editPortfolioFunc } = useContext(PortfolioContext)
  const navigate = useNavigate()
  const location = useLocation()

  const hideNavbar = ["/Edit", "/MyPortfolio", "/"]

  useEffect(() => {
    navigateLogin(navigate)
    if (Cookies.get().jwtToken) {
      getPortfolio()
    } else {
      if (location.pathname !== "/" && !location.pathname.startsWith('/Portfolio-By/')) {
        getPortfolio()
      }
    }

  }, [])

  if (loading && (location.pathname !== "/" && !location.pathname.startsWith('/Portfolio-By/'))) {
    return <Loading />
  }

  return (
    <>
      {
        hideNavbar.includes(location.pathname) || location.pathname.startsWith('/Portfolio-By/') ? <Navbar /> :
          null
      }
      <ToastContainer />
      {location.pathname === "/" || location.pathname.startsWith('/Portfolio-By/') ? '' :
        location.pathname === "/Edit" ? <Button func={editPortfolioFunc} text="Save" classProps="fixed bottom-[30px] right-[30px] hover:bg-white hover:text-black z-50" /> :
          Cookies.get().jwtToken ?
            <Button func={() => navigate("/Edit")} text="Edit" classProps="fixed bottom-[30px] right-[30px] hover:bg-white hover:text-black z-50" />
            : ''
      }
      <Routes>
        <Route path='/' element={<SearchPortfolio />} />
        <Route path="/Portfolio-By/:name" element={<GetPortfolio />} />
        <Route path='/MyPortfolio' element={<MyPorfolio />} />
        <Route path='/Edit' element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
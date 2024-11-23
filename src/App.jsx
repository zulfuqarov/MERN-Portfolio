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


const App = () => {
  const { loading, getPortfolio, editPortfolioFunc } = useContext(PortfolioContext)
  const navigate = useNavigate()
  const location = useLocation()

  const hideNavbar = ["/Login", "/Register"]

  useEffect(() => {
    navigateLogin(navigate)
    getPortfolio()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {
        hideNavbar.includes(location.pathname) ? null :
          <Navbar />
      }
      <ToastContainer />
      <Button func={editPortfolioFunc} text="Save" classProps=" fixed bottom-[30px] right-[30px] hover:bg-white hover:text-black z-50" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
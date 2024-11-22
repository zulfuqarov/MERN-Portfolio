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


const App = () => {
  const { loading, getPortfolio } = useContext(PortfolioContext)
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
import React, { createContext, useState } from 'react'
import apiClient from '../api.js'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export const PortfolioContext = createContext()



const ContextPorfolio = ({ children }) => {

    const navigate = useNavigate()
    const [loading, setloading] = useState(true)

    const [portfolioData, setportfolioData] = useState()
    const getPortfolio = async () => {
        setloading(true)
        try {
            const response = await apiClient.get("/Portfolio")
            setportfolioData(response.data)
            console.log(response)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
        finally {
            setloading(false)
        }
    }
    

    const Login = async (data) => {
        try {
            const response = await apiClient.post("/Auth/Login", data)
            toast.success(response.data.message)
            navigate("/")
            getPortfolio()
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    // Edit Value Start
    const [editValue, seteditValue] = useState({})

    console.log(editValue)

    return (
        <PortfolioContext.Provider value={{
            loading,
            Login,
            getPortfolio,
            portfolioData,
            seteditValue,
            editValue
        }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export default ContextPorfolio
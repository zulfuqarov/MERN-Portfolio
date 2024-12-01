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

    const [editPortfolio, seteditPortfolio] = useState()
    const editPortfolioFunc = async (id) => {
        console.log(editValue)
        const formData = new FormData()

        formData.append("data", JSON.stringify(editValue))
        formData.append("headerImg", editValue.headerImg)
        formData.append("aboutMeImg", editValue.aboutMeImg)

        if (editValue && editValue.myPortfolio && editValue.myPortfolio.length > 0) {
            for (let i = 0; i < editValue.myPortfolio.length; i++) {
                formData.append("PortfolioImg", editValue.myPortfolio[i].image)
            }
        }

        if (editValue && editValue.service && editValue.service.length > 0) {
            for (let i = 0; i < editValue.service.length; i++) {
                formData.append("serviceImg", editValue.service[i].img)
            }
        }

        try {
            const response = await apiClient.put("/Portfolio/6741ffdd5fa8eb8cd4acd6ac", formData)
            console.log((response).data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PortfolioContext.Provider value={{
            loading,
            Login,
            getPortfolio,
            portfolioData,
            seteditValue,
            editValue,
            editPortfolioFunc
        }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export default ContextPorfolio
import React, { createContext, useState } from 'react'
import apiClient from '../api.js'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export const PortfolioContext = createContext()



const ContextPorfolio = ({ children }) => {

    const location = useLocation()
    const navigate = useNavigate()
    const [loading, setloading] = useState(true)

    const [portfolioData, setportfolioData] = useState()
    const getPortfolio = async () => {
        setloading(true)
        try {
            const response = await apiClient.get("/Portfolio")
            setportfolioData(response.data)
            setloading(false)
            console.log(response)
        } catch (error) {
            console.log(error)
            setloading(false)
            location.pathname === "/Login" ? '' :
                toast.error(error.response.data.message)
        }
    }

    const Register = async (data) => {
        setloading(true)
        try {
            const response = await apiClient.post("/Auth/Register", data)
            console.log(response.data)
            toast.success(response.data.message)
            navigate("/Login")
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
            if (response.data.edit) {
                navigate("/MyPortfolio")
                getPortfolio()
            } else {
                navigate("/Edit")
                getPortfolio()
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    // Edit Value Start
    const [editValue, seteditValue] = useState({})
    const [editPortfolio, seteditPortfolio] = useState()
    const editPortfolioFunc = async () => {
        if(Object.keys(editValue).length == 0){
            toast.info("Please fill all the required fields")
            return;
        }
        setloading(true)

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
            const response = await apiClient.put("/Portfolio", formData)
            setportfolioData(response.data)
            setloading(false)
            seteditValue({})
            toast.success("Portfolio updated successfully")
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    // Search Start
    const [searchPortfolio, setsearchPortfolio] = useState([])
    const searchPortfolioFunc = async (searchText) => {
        try {
            const response = await apiClient.post("/Portfolio/Search", {
                search: searchText
            })
            console.log(response.data)
            setsearchPortfolio(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PortfolioContext.Provider value={{
            setloading,
            loading,
            Register,
            Login,
            getPortfolio,
            portfolioData,
            seteditValue,
            editValue,
            editPortfolioFunc,
            searchPortfolioFunc,
            searchPortfolio
        }}>
            {children}
        </PortfolioContext.Provider>
    )
}

export default ContextPorfolio
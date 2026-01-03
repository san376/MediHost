import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext=createContext()   //createContext is used in React to share data between components without passing props manually at every level.
const AppContextProvider =(props)=> {
    const currencysymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors,setDoctors] = useState([])
    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const [userData, setUserData] = useState(false)

    const getDoctorsData = async () => { 
        try {

            
            const {data} = await axios.get(backendUrl + '/api/doctor/list')
            console.log(data);
            if(data.success){
                setDoctors(data.doctors)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const loadUserProfileData = async() => {
        console.log(2)
        try {
            
            const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{token}})
            if(data.success){
                setUserData(data.userData)
            }else{
                console.log(10)
                toast.error(data.message)
            }

        } catch (error) {
            console.log(5)
            toast.error(error.message)
        }
    }


    const value ={
        doctors,getDoctorsData,
        currencysymbol,
        token,setToken,
        backendUrl,
        userData,setUserData,
        loadUserProfileData
    }

    useEffect(()=>{
        getDoctorsData()
    },[])

    useEffect(()=>{
        if(token){
            loadUserProfileData()
        }
        else{
            setUserData(false)
        }
    },[token])


    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider



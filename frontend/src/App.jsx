import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Myprofile from './pages/Myprofile'
import MyAppointements from './pages/MyAppointements'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-profile' element={<Myprofile />}/>
        <Route path='/my-appointments' element={<MyAppointements />}/>
        <Route path='/appointment/:docId' element={<Appointment />}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

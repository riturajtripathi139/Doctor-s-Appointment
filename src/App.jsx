import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyAppointments from './Pages/MyAppointments'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Doctors' element={<Doctors/>}/>
        <Route path='/Doctors/:speciality' element={<Doctors/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/MyProfile' element={<MyProfile/>}/>
        <Route path='/MyAppointments' element={<MyAppointments/>}/>
        <Route path='/Appointment/:docId' element={<Appointment/>}/>
     </Routes>
      <Footer/>
    </div>
  )
}

export default App

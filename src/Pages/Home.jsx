import React from 'react'
import Header from '../Components/header'
import SpecialityMenu from '../Components/Specialitymenu'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'


const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home

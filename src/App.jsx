import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import EveryDayNeed from './Components/EveryDayDiv/EveryDayNeed'
import HomeService from './Components/HomeArangeDiv/HomeService'
import ProjectWork from './Components/ProjectDiv/ProjectWork'
import Adverticement from './Components/Advarticement/Adverticement'
import AboutUs from './Components/TalkAboutUs/AboutUs'
import ServiceCost from './Components/ServicesCost/ServiceCost'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className='w-[85%] m-auto font-inh bg-white'>
        <NavBar/>
        <Search/>
        <EveryDayNeed/>
        <HomeService/>
        <ProjectWork/>
        <Adverticement/>
        <AboutUs/>
        <ServiceCost/>
        <Footer/>
    </div>
  )
}

export default App











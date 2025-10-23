import React from 'react'
// import HeaderNavbar from '../components/HNavbar'
import AboutUsOverview from '../components/AboutUsOverview'
import VisionMission from '../components/VisionMission'
import BoardAndAdvisory from '../components/BoardAndAdvisory'
import GetInvolved from '../components/GetInvolved'
import Footer from '../components/Footer'
import HeaderNavbar from '../components/HeaderNavbar'

function AboutUs() {
  return (
    <>
    <HeaderNavbar />
    <AboutUsOverview />
    <VisionMission />
    <BoardAndAdvisory />
    <GetInvolved />
    <Footer />
    </>
  )
}

export default AboutUs
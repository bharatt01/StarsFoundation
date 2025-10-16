import React from 'react'
import Navbar from '../components/Navbar'
import AboutUsOverview from '../components/AboutUsOverview'
import VisionMission from '../components/VisionMission'
import BoardAndAdvisory from '../components/BoardAndAdvisory'
import GetInvolved from '../components/GetInvolved'
import Footer from '../components/Footer'

function AboutUs() {
  return (
    <>
    <Navbar />
    <AboutUsOverview />
    <VisionMission />
    <BoardAndAdvisory />
    <GetInvolved />
    <Footer />
    </>
  )
}

export default AboutUs
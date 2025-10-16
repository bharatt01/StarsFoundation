import React from 'react'
import Navbar from '../components/Navbar'
import OurWorkOverview from '../components/OurWorkOverview'
import FeaturedInitiatives from '../components/FeaturedInitiatives'
import ImpactHighlights from '../components/ImpactHighlights'
import WorkGallery from '../components/WorkGallery'
import Footer from '../components/Footer'

function OurWork() {
  return (
    <>
    <Navbar />
    <OurWorkOverview />
    <FeaturedInitiatives />
    <ImpactHighlights />
    <WorkGallery />
    <Footer />
    </>
  )
}

export default OurWork
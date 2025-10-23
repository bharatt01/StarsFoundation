import React from 'react'
import HeaderNavbar from '../components/HeaderNavbar'
import OurWorkOverview from '../components/OurWorkOverview'
import FeaturedInitiatives from '../components/FeaturedInitiatives'
import ImpactHighlights from '../components/ImpactHighlights'
import WorkGallery from '../components/WorkGallery'
import Footer from '../components/Footer'
import ProjectsOverview from '../components/ProjectsOverview'

function OurWork() {
  return (
    <>
    <HeaderNavbar />
    <ProjectsOverview />
    {/* <OurWorkOverview /> */}
    <FeaturedInitiatives />
    <ImpactHighlights />
    <WorkGallery />
    <Footer />
    </>
  )
}

export default OurWork
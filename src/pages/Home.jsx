import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import HowWeWork from '../components/HowWeWork'
import ImpactGallery from '../components/ImpactGallery'
import StorySpotlight from '../components/StorySpotlight'
import VolunteerSpotlight from '../components/VolunteerSpotlight'
import VolunteerCTA from '../components/VolunteerCTA'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import AboutUsPreview from '../components/AboutUsPreview'
function Home() {
  return (
    <>
    <Navbar />
    <HeroSection    />  
    <ProjectsSection />
    <HowWeWork />
    <ImpactGallery />
    <StorySpotlight />
    <AboutUsPreview />
    <VolunteerCTA />
    <Footer />
    </>
  )
}

export default Home
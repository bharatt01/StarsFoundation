import React from 'react'
import HeaderNavbar from '../components/HeaderNavbar'
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
import StarFoundationHero from '../components/StarsFoundationHero'
import SkillTrainingProjects from '../components/SkillTrainingProjects'
import ImpactCounters from '../components/ImpactCounters'
import LatestCauses from '../components/LatestCauses'
// import HeaderTop from '../components/HeaderTop'
function Home() {
  return (
    <>
    {/* <HeaderTop /> */}
    <HeaderNavbar />
    <HeroSection />
    <StarFoundationHero />
    <HowWeWork />
    <ImpactGallery />
    <SkillTrainingProjects />
    <StorySpotlight />
    <ImpactCounters />
    <LatestCauses />
    <AboutUsPreview />
    <VolunteerCTA />
    <Footer />
    </>
  )
}

export default Home
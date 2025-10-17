// pages/Stories.jsx
import Navbar from '../components/Navbar'
import StorySpotlight from '../components/StorySpotlight'
import VolunteerSpotlight from '../components/VolunteerSpotlight'
import Footer from '../components/Footer'
import StoriesHero from '../components/StoriesHero'
import StoriesGrid from '../components/StoriesGrid'

export default function Stories() {
  return (
    <>
      <Navbar />
      <StoriesHero />
      <StoriesGrid />
      <VolunteerSpotlight />
      <Footer />
    </>
  )
}

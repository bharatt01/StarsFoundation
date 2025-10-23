// pages/Stories.jsx
import HeaderNavbar from '../components/HeaderNavbar'
import StorySpotlight from '../components/StorySpotlight'
import VolunteerSpotlight from '../components/VolunteerSpotlight'
import Footer from '../components/Footer'
import StoriesHero from '../components/StoriesHero'
import StoriesGrid from '../components/StoriesGrid'
import HeaderTop from '../components/HeaderTop'

export default function Stories() {
  return (
    <>
      <HeaderNavbar />
      <StoriesHero />
      <StoriesGrid />
      <VolunteerSpotlight />
      <Footer />
    </>
  )
}

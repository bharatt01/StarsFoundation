import React from 'react'
import HeaderNavbar from '../components/HeaderNavbar'
import GetInvolvedHero from '../components/GetInvolvedHero'
import VolunteerSection from '../components/VolunteerSection'
import InternshipSection from '../components/InternshipSection'
import DonationSection from '../components/DonationSection'
import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'
function GetInvolved() {
  return (
    <>
    <HeaderNavbar />
    <GetInvolvedHero />
<VolunteerSection />
<InternshipSection  />
<DonationSection />
<EventsSection />   
<Footer />
    </>
  )
}

export default GetInvolved
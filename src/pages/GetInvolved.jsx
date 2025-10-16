import React from 'react'
import Navbar from '../components/Navbar'
import GetInvolvedHero from '../components/GetInvolvedHero'
import VolunteerSection from '../components/VolunteerSection'
import InternshipSection from '../components/InternshipSection'
import DonationSection from '../components/DonationSection'
import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'
function GetInvolved() {
  return (
    <>
    <Navbar />
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
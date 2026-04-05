import React from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedDestinations from './components/FeaturedDestinations'
import TourSection from './components/TourSection'
import DiscountSection from './components/DiscountSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <FeaturedDestinations />
        <TourSection />
        <DiscountSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
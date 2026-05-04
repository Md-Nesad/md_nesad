import React from 'react'
import Navbar from '../components/Navbar'
import HeroArea from '../components/HeroArea'
import Services from '../components/Services'
import SkillsSection from '../components/SkillsSection'
import Testimonials from '../components/Testimonials'
import Clients from '../components/Client'
import PricingSection from '../components/PricingSection'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import PortfolioSection from '../components/PortfolioSection'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppFloatingButton from '@/components/WhatsUpFloatingButton'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroArea />
      <Services />
      <PortfolioSection />
      <SkillsSection />
      <Testimonials />
      <Clients />
      <PricingSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  )
}

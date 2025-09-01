import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import BulkMode from './components/BulkMode'
import Testimonial from './components/Testimonial'
import CostComparison from './components/CostComparison'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

const Home = () => {
  return (
    <>
      <Hero />
      <Problem />
      <AboutUs />
      <Features />
      <BulkMode />
      <Testimonial />
      <CostComparison />
      <Pricing />
      <FAQ />
    </>
  )
}

export default Home

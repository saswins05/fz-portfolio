import React from 'react'
import Hero from './partials/Hero'
import Signature from './partials/Signature'
import About from './partials/About'
import MeDistingue from './partials/MeDistingue'
import Engagement from './partials/Engagement'
import Chiffres from '../Chiffres'

function Home() {
  return (
    <>
      <Hero />
      <Signature />
      <About />
      <MeDistingue />
      <Engagement />
      <Chiffres />
    </>
  )
}

export default Home
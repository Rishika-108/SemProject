import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import FeaturedMovies from '../Components/FeaturedMovie'
import CallToAction from '../Components/CallToAction'

const Home = () => {
  return (
     <>
      <HeroBanner/>
       <FeaturedMovies/>
        <CallToAction/>
     </>
  )
}

export default Home

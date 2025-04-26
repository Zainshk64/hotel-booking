import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured';
import Exclusive from '../components/Exclusive';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Exclusive/>
    </div>
  )
}

export default Home;
import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured';
import Exclusive from '../components/Exclusive';
import Testinomial from '../components/Testinomial';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Exclusive/>
      <Testinomial/>
    </div>
  )
}

export default Home;
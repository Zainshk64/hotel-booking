import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured';
import Exclusive from '../components/Exclusive';
import Testinomial from '../components/Testinomial';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Exclusive/>
      <Testinomial/>
      <Newsletter/>
    </div>
  )
}

export default Home;
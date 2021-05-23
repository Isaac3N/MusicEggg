import React, { useEffect, useState } from 'react';
import '../../App.css';
import Cards from '../Cards';
import Contact from '../Contact';
import HeroSection from '../HeroSection';
import PoweredBy from '../PoweredBy';

function Home() {
  return (
    <>
      <HeroSection/>
      <Cards/>
      <PoweredBy/>
      <Contact/>

    </>
  );
}

export default Home;

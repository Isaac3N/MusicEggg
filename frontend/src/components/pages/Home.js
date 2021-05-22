import React, { useEffect, useState } from 'react';
import '../../App.css';
import Cards from '../Cards';
import Contact from '../Contact';
import HeroSection from '../HeroSection';
import PoweredBy from '../PoweredBy';
import axios from 'axios'


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
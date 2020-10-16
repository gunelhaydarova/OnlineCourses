import React from 'react';
import '../../App.css';
import Cards from '../Card/Cards';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import Application from "../Aplication/Aplication";

import Event from "../Events/Event";
import Subscribe from "../Counter/Subscribe";
import Information from "../Counter/Information";
import Bg_image from "../Counter/Counter";
import Teachers from "../Teachers/Teacher";
import Intro from "../Intro/Intro";
 
    
    
function Home() {
  return (
    <>
       <HeroSection />
       <Application/>
       <Intro/>
       <Bg_image/>
       <Cards />
       <Information/>
       <Teachers/>
       <Event/>
       <Subscribe/>
      <Footer />
    </>
  );
}

export default Home;

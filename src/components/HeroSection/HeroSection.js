import React from 'react';
import '../../App.css';
import Slider from 'infinite-react-carousel';
import './HeroSection.css';
import HeroItems from "./HeroItems";



class HeroSection extends React.Component {


  render() {

    const settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      shift: 0,
      duration: 5,
      dots:true
    };
    return (

        <Slider  dots {...settings}>
          <HeroItems
              src='./images/img_bg_1.jpg'
              text='Best Online Learning System'
              label='Register Now'
          />
          <HeroItems
              src='./images/img_bg_2.jpg'
              text='Online Free Course'
              label='Register Now'
          />
          <HeroItems
              src='./images/img_bg_3.jpg'
              text='Education is a Key to Success'
              label='Register Now'
          />

        </Slider>
    );
  }
}
export default HeroSection;

import React from 'react';
import '../../App.css';
import Contact_Information from "../Contact_Information/Contact_Information";
import  Footer from '../Footer/Footer'
import  Subscribe from '../Counter/Subscribe'
function Contact() {
  return (
    <div>
      <h1 className='contact'>Contact</h1>
      <Contact_Information/>
      <Subscribe/>
      <Footer/>
    </div>
  ) 
  ;
}

export default  Contact;
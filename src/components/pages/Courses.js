import React from 'react';
import '../../App.css';
import Cards from "../Card/Cards";
import  Footer from '../Footer/Footer'
import  Subscribe from '../Counter/Subscribe'
function Courses() {
  return (
    <div>
      <h1 className='courses'>Courses</h1>
      <Cards/>
      <Subscribe/>
      <Footer/>
    </div>
  ) 
  ;
}

export default  Courses;
import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax"; 
import './Counter.css';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
   
  top:'50%',
  left:'50%',
  position: "absolute", 
  transform: "translate(-50%,-50%)",
  
};
const image1 ="./images/img_bg_2.jpg";
 

const Bg_image = () => (
  <div style={styles}>
     
    <Parallax bgImage={image1} strength={300}>
      <div style={{ height: 300,background: 'rgba(0,0,0,.7)' }}>
        <div style={insideStyles}> 
            <div className='projectFactsWrap  counters'> 
             <div className="counter-entry">
									<span className="icon"><i className="flaticon-book"/></span>
									<div className="desc">
										<span className=" counter js-counter" data-from="0" data-to="1539" data-speed="5000" data-refresh-interval="50">12345</span>
										<span className="counter-label">Courses</span>
									</div>
							</div>
              <div className="counter-entry">
									<span className="icon"><i class="flaticon-student"/></span>
									<div className="desc">
										<span className=" counter js-counter" data-from="0" data-to="1539" data-speed="5000" data-refresh-interval="50">5345</span>
										<span className="counter-label">Students</span>
									</div>
							</div>
              <div className="counter-entry">
									<span className="icon"><i className="flaticon-professor"/></span>
									<div className="desc">
										<span className=" counter js-counter" data-from="0" data-to="1539" data-speed="5000" data-refresh-interval="50">2345</span>
										<span className="counter-label">Teachers</span>
									</div>
							</div>
              <div className="counter-entry">
									<span className="icon"><i className="flaticon-earth-globe"/></span>
									<div className="desc">
										<span className=" counter js-counter" data-from="0" data-to="1539" data-speed="5000" data-refresh-interval="50">200</span>
										<span className="counter-label">Countries</span>
									</div>
							</div>
            </div>
        </div>
      </div>
    </Parallax>

	  <div style={{ height: 50 }} />

  </div>
);


export default Bg_image;

import React from "react";
import { Parallax } from "react-parallax"; 
import './Subscribe.scss';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  width: '100%', 
  top:'50%',
  left:'50%',
  position: "absolute", 
  transform: "translate(-50%,-50%)",
  
};
const image1 ="./images/img_bg_2.jpg";

const Subscribe  = () => (
  <div style={styles}>

    <Parallax bgImage={image1} strength={400}>
      <div style={{ height:400,background: 'rgba(0,0,0,.7)' }}>
        <div style={insideStyles}> 
            <div className="sub center">
                <h3> SUBSCRIBE NEWSLETTER</h3>
                <h5> Subscribe our newsletter and get latest update </h5>
            <form>
                  <button type="button">Subscribe!</button>
                  <input placeholder="email@example.com"></input>
            </form> 
          </div>
        </div>
      </div>
    </Parallax> 

  </div>
);


export default Subscribe ;

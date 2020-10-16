import React from "react";
import { Parallax } from "react-parallax";
import './Counter.css';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  width: '70%', 
  top:'50%',
  left:'50%',
  position: "absolute", 
  transform: "translate(-50%,-50%)", 
};
const image1 ="./images/img_bg_2.jpg";
const styles2 = {
    paperContainer: { 
        backgroundImage: `url(${"/images/person3.jpg"})`
    }
};

const Information = () => (
  <div style={styles}>
    
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500,background: 'rgba(0,0,0,.7)' }}>
        <div style={insideStyles}> 
                <div className="item">
                    <div className="testimony-slide">
                        <div className="testimony-wrap">
                            <blockquote>
                                <span>Sophia Foster</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                                    at the coast of the Semantics, a large language ocean.</p>
                            </blockquote>
                            <div className="figure-img" style={styles2.paperContainer}></div>
                        </div>
                    </div>
                </div> 
        </div>
      </div>
    </Parallax>

      <div style={{ height: 50 }} />

  </div>
);


export default Information ;

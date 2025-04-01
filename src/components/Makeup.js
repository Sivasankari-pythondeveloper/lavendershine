// src/components/Makeup.js
import React from "react";
 // Consider creating a separate CSS file for this component
import "bootstrap/dist/css/bootstrap.min.css";
import non1 from "../assets/non1.jpeg";
import non2 from "../assets/non2.jpeg";
import non3 from "../assets/non3.jpeg";
import hd1 from "../assets/hd1.jpeg";
import hd2 from "../assets/hd2.jpeg";
import hd3 from "../assets/hd3.jpeg";
import a3 from "../assets/a3.jpeg";
import a2 from "../assets/a2.jpeg";
import a4 from "../assets/a4.jpeg"


const Makeup = () => {
  return (
    <section className="makeup" id="services"> 
      <h1 className="service-title">Makeup Services</h1>
      
      {/* Non HD Makeup Section */}
      <section className="wave-section">
        <div className="content">
          <h2 className="title">Non HD Makeup</h2>
          
        </div>
        <div className="image-container">
          <img src={non1} alt="Non Makeup 1" className="styled-image" />
          <img src={non2} alt="Non Makeup 2" className="styled-image" />
          <img src={non3} alt="Non Makeup 3" className="styled-image" />
        </div>
        <svg className="wave-svg" viewBox="0 0 1440 320">
          <path
            fill="#875692"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,122.7C672,128,768,160,864,186.7C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64V320H0Z"
          ></path>
        </svg>
      </section>
      
      {/* HD Makeup Section */}
      <section className="wave-section">
        <div className="content">
          <h2 className="title">HD Makeup</h2>
          
        </div>
        <div className="image-container">
          <img src={hd1} alt="HD Makeup 1" className="styled-image" />
          <img src={hd2} alt="HD Makeup 2" className="styled-image" />
          <img src={hd3} alt="HD Makeup 3" className="styled-image" />
        </div>
        <svg className="wave-svg" viewBox="0 0 1440 320">
          <path
            fill="#875692"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,122.7C672,128,768,160,864,186.7C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64V320H0Z"
          ></path>
        </svg>
      </section>
      <section className="wave-section">
        <div className="content">
          <h2 className="title">Air Brush Makeup</h2>
          
        </div>
        <div className="image-container">
          <img src={a2} alt="HD Makeup 1" className="styled-image" />
          <img src={a3} alt="HD Makeup 2" className="styled-image" />
          <img src={a4} alt="HD Makeup 3" className="styled-image" />
        </div>
        <svg className="wave-svg" viewBox="0 0 1440 320">
          <path
            fill="#875692"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,122.7C672,128,768,160,864,186.7C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64V320H0Z"
          ></path>
        </svg>
      </section>
    </section>
  );
};

export default Makeup;
import React from "react";
import bleach from "../assets/bleach.jpg";
import cleanup from "../assets/cleanup.jpeg";
import detan from "../assets/detan.jpeg";
import face from "../assets/face.jpeg";
import medi from "../assets/medi.jpeg";
import mehandi from "../assets/mehandi.jpeg";
import nail from "../assets/nail.jpeg";
import pedi from "../assets/pedi.jpeg";
import thread from "../assets/thread.jpeg";
import waxing from "../assets/waxing.jpeg";
import str from '../assets/fly.jpg';

const images = [
  { src: mehandi, alt: "Mehandi" },
  { src: nail, alt: "Nail Extensions" },
  { src: thread, alt: "Threading" },
  { src: detan, alt: "Detan" },
  { src: waxing, alt: "Waxing" },
  { src: bleach, alt: "Bleach" },
  { src: cleanup, alt: "Cleanup" },
  { src: face, alt: "Facial" },
  { src: medi, alt: "Manicure" },
  { src: pedi, alt: "Pedicure" },
  { src: str,alt: "Haircut"}
];

const Groom = () => {
  return (
    <div className="grid-container">
      <h1>Groom Services</h1>
      {images.map((image, index) => (
        <div className="card" key={index}>
        <img src={image.src} alt={image.alt} className="card-img" />
          <p className="card-text">{image.alt}</p>
          
        </div>
        
      ))}
    </div>
  );
};

export default Groom;
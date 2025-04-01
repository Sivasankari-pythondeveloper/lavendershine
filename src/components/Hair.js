import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fly from "../assets/fly.jpg";
import cur from "../assets/cur.jpg";
import str from "../assets/str.jpg";
import layer from "../assets/layer.jpg";

const Hair = () => {
  return (
    <div>
      <h1>Hair Services</h1>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={fly} alt="Fly Hair" />
          <div className="overlay">
            <h2>Butter Fly Hair</h2>
            <p>Butter Fly hair gives you a soft and natural lift with lightweight movement.</p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={cur} alt="Curly Hair" />
          <div className="overlay">
            <h2>Curly Hair</h2>
            <p>Define your curls with our expert styling techniques for a perfect look.</p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={str} alt="Straight Hair" />
          <div className="overlay">
            <h2>Straight Hair</h2>
            <p>Get a sleek, polished, and smooth straight hair look for any occasion.</p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={layer} alt="Layered Hair" />
          <div className="overlay">
            <h2>Layered Hair</h2>
            <p>Layered haircuts add volume and movement for a stylish appearance.</p>
          </div>
        </div>
      </div>
</div>
  );
};

export default Hair;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import model1 from "./assets/model1.jpg";
import model2 from "./assets/model2.jpg";
import model3 from "./assets/model3.jpg";
import model4 from "./assets/model4.jpg";
import model5 from "./assets/model5.jpg";
import model6 from "./assets/model6.jpg";
import model7 from "./assets/model7.jpg";

const BrideGallery = () => {
  return (
    <div className="bride-gallery-container">
      {/* Bridal Models Header */}
      <div className="bridal-header text-center">
        <h1 className="bridal-title">Meet Our Stunning Bridal Models</h1>
        <p className="bridal-subtitle">Real Brides, Real Beauty - Our Lavender Shine Family</p>
      </div>
      
      {/* Gallery Grid */}
      <div className="container mt-4">
        <div className="row">
          {[model1, model2, model3, model4, model5, model6, model7].map((model, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="bride-card">
                <img 
                  src={model} 
                  alt={`Bride ${index + 1}`} 
                  className="img-fluid rounded shadow bride-img"
                />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrideGallery;
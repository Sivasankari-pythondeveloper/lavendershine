import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Custom styles
import model1 from "./assets/model1.jpg";
import model2 from "./assets/model2.jpg";
import model3 from "./assets/model3.jpg";
import model4 from "./assets/model4.jpg";
import model5 from "./assets/model5.jpg";
import model6 from "./assets/model6.jpg";
import model7 from "./assets/model7.jpg";

const BrideGallery = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Bride Gallery</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={model1} alt="Bride 1" className="img-fluid rounded shadow gallery-img" />
        </div>
        <div className="col-md-6 mb-4">
          <img src={model2} alt="Bride 2" className="img-fluid rounded shadow gallery-img" />
        </div>
        <div className="col-md-6 mb-4">
          <img src={model3} alt="Bride 3" className="img-fluid rounded shadow gallery-img" />
        </div>
        <div className="col-md-6 mb-4">
          <img src={model4} alt="Bride 4" className="img-fluid rounded shadow gallery-img" />
        </div>
        <div className="col-md-6 mb-4">
          <img src={model5} alt="Bride 5" className="img-fluid rounded shadow gallery-img" />
        </div>
        <div className="col-md-6 mb-4">
          <img src={model6} alt="Bride 6" className="img-fluid rounded shadow gallery-img" />
        </div>
        <div className="col-md-6 mb-4">
          <img src={model7} alt="Bride 7" className="img-fluid rounded shadow gallery-img" />
        </div>
      </div>
    </div>
  );
};

export default BrideGallery;

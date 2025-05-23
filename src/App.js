import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./App.css";
import { FaWhatsapp } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import Makeup from './components/Makeup';
import Groom from './components/Groom';
import { FaArrowCircleUp } from 'react-icons/fa';

// Import images
import brideMakeup from "./assets/brideMakeup.jpg";
import brideMaidMakeup from "./assets/brideMaidMakeup.jpg";
import guestMakeup from "./assets/guestMakeup.jpg";
import bridalFlowers from "./assets/bridalFlowers.jpg";
import logo from "./assets/logo.jpg";
import frontimage from "./assets/frontimage.jpg";
import frontimage2 from "./assets/frontimage2.jpg";
import frontimage3 from "./assets/frontimage3.jpg";
import flower from "./assets/flower.jpg";
import flower2 from "./assets/flower2.jpg";
import flower3 from "./assets/flower3.jpg";
import flower4 from "./assets/flower4.jpg";
import organic from "./assets/organic.jpeg";
import pre3 from "./assets/pre3.jpg";
import pre1 from "./assets/pre1.jpeg";
import pre4 from "./assets/pre4.jpg";

const services = [
  { id: 1, name: "Bride's Makeup", image: brideMakeup },
  { id: 2, name: "Bridesmaid Makeup", image: brideMaidMakeup },
  { id: 3, name: "Guest Makeup", image: guestMakeup },
  { id: 4, name: "Bridal Flowers", image: bridalFlowers },
];


const sendWhatsAppMessage = (serviceName) => {
  const phoneNumber = "7010208433";
  const message = `Hello, I would like to book *${serviceName}*`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
};

const App = () => {
  

  const [selectedDate, setSelectedDate] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'booking', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  
  

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <img src={logo} alt="logo" className="logo" />
        <Link className="navbar-brand" to="/">Lavender Shine</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'bridals' ? 'active' : ''}`}
                onClick={() => scrollToSection('bridals')}
              >
                Our Bridals
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => scrollToSection('services')}
              >
                Services
              </button>
            </li>
          
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
            
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home">
        <div className="hero-carousel-container">
          <Carousel fade controls={false} indicators={true} interval={3000} className="hero-carousel">
            <Carousel.Item>
              <div 
                className="carousel-slide" 
                style={{ backgroundImage: `url(${frontimage})` }}
              >
                <div className="carousel-content">
                  <h1>Excellence is our Standard<br />Perfection is our Goal</h1>
                  
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div 
                className="carousel-slide" 
                style={{ backgroundImage: `url(${organic})` }}
              >
                <div className="carousel-content">
                  <h1>We Provide 100% Organic Mehandi<br /></h1>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div 
                className="carousel-slide" 
                style={{ backgroundImage: `url(${frontimage3})` }}
              >
                <div className="carousel-content">
                  <h1>Bridal Flowers<br />To Complete Your Look</h1>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="button">
        <button 
                    className="btn btn-success book-btn" 
                    onClick={() => sendWhatsAppMessage("Appointment")}
                  >
                    <FaWhatsapp size={20} />
                    Book Appointment
                  </button>
                  </div>
        </section>
        

        {/* Flower Section */}
        <section id='bridals'>

        <div className="flower-container">
          <div className="hidden-text">
            <h2>Discover Our Bride Models</h2>
            <Link to="/bride-gallery">
              <button className="btn btn-primary explore-btn">
                Explore Here
              </button>
            </Link>
          </div>
          <img src={flower} alt="Flower" className="flower top-left" />
          <img src={flower2} alt="Flower" className="flower top-right" />
          <img src={flower3} alt="Flower" className="flower bottom-left" />
          <img src={flower4} alt="Flower" className="flower bottom-right" />
        </div>
      </section>

      <section>
  <Carousel className="second-carousel">
    <Carousel.Item>
      <div 
        className="carousel-slide" 
        style={{ backgroundImage: `url(${pre1})` }}
      >
        <div className="carousel-content">
          <h1>We Provide Saree Pre Pleating Service <br />With Affordable Service</h1>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div 
        className="carousel-slide" 
        style={{ backgroundImage: `url(${pre3})` }}
      >
        <div className="carousel-content">
          <h1>Pleats according to clients body type measurement  <br /></h1>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div 
        className="carousel-slide" 
        style={{ backgroundImage: `url(${pre4})` }}
      >
        <div className="carousel-content">
          <h1>Anyone can drape a pre-pleated saree within 5 minutes <br /></h1>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</section>
          

      {/* Services Section */}
      <section id="services">
        <Makeup />
        <Groom />
      </section>

    

      {/* Contact Section */}
<section id="contact">
  <footer className="text-center mt-5 p-4 bg-light position-relative">
    <div className="container">
      <h2>Stay Up To Date</h2>
      <p>Follow us on social media for the latest updates and bridal inspiration</p>
      
      <div className="social-icons d-flex justify-content-center gap-4 mb-3">
        {/* Instagram Logo */}
        <a 
          href="https://instagram.com/lavendershine_makeoverartistry" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
            alt="Instagram" 
            style={{ width: '40px', height: '40px' }}
          />
        </a>
        
        {/* Email Logo */}
        <a 
          href="mailto:lavendershine2025@gmail.com" 
          className="social-icon"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
            alt="Email" 
            style={{ width: '40px', height: '40px' }}
          />
        </a>
        
        {/* WhatsApp Logo */}
        <a 
          href="https://wa.me/7010208433" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaWhatsapp size={40} color="#25D366" />
        </a>
      </div>
      
      <h5>To book your appointment Contact Us</h5>
      <p>Lavender Shine, Ettayapuram</p>
      <p>Phone: 7010208433</p>
      
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowCircleUp size={40} color="maroon" />
      </div>
    </div>
  </footer>
</section>
    </div>
  );
};

export default App;
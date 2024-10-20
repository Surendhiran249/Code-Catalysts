import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import videoSrc from '../assests/environ.mp4';
import logoSrc from '../assests/ecoscope.png'; // Importing the logo
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import icons
import './style.css'

function Home() {
  // Scroll to the About section when the "ABOUT" link is clicked

  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar" style={{ 
        position: 'fixed', 
        top: '0', 
        width: '100%', 
        zIndex: '1000', 
        backgroundColor: 'white', 
        borderBottom: '5px solid transparent',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px 2px green',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 20px',
        boxSizing: 'border-box'
      }}>
        <div className="logo">
          <img src={logoSrc} alt="ecoScope Logo" className="logo-img" /> {/* Logo Image */}
        </div>
        <nav className="nav-links">
          <Link to="/Home" className="nav-item">HOME</Link>
          <Link to="/login" className="nav-item">LOGIN <FaSignInAlt className="nav-icon" /></Link> {/* Login link */}
          <Link to="/register" className="nav-item">REGISTER <FaUserPlus className="nav-icon" /></Link> {/* Register link */}
        </nav>
      </header>

      {/* Background Video */}
      <section id="home" className="hero">
        <video autoPlay loop muted className="background-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1 className="welcome-heading">Welcome To EcoScope</h1>
          <p className="welcome-text">Your platform to track, reduce, and report environmental impact.</p>
          <br />
          <div className="cta-buttons">
            <Link to="/login" className="cta-btn">Get Started</Link> {/* Get Started Button */}
          </div>
        </div>
      </section>

      {/* About Section: Services */}
      <section id="about" className="about">
        <h2>Services</h2>
        <div className="goal-boxes" style={{ display: 'flex',paddingLeft:'15%',paddingRight:'15%' }}>
          <Link to="/login" className="goal-box"> {/* Link to Data Entry Page */}
            <h3>Data Entry</h3>
            <p>Track and input data for sustainability metrics.</p>
          </Link>

          <Link to="/login" className="goal-box"> {/* Link to Login Page for Suggestions */}
            <h3>Suggestions</h3>
            <p>Get personalized recommendations for improvement.</p>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What People Think About Us</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"EcoScope has transformed how we track our company's environmental impact. The data visualization and flowcharts are invaluable!"</p>
            <h4>- John D., Sustainability Officer</h4>
          </div>
          <div className="testimonial-card">
            <p>"The platform is incredibly user-friendly, and the suggestions have helped us significantly reduce energy consumption."</p>
            <h4>- Sarah M., Operations Manager</h4>
          </div>
          <div className="testimonial-card">
            <p>"I love how easy it is to track our company's carbon footprint. The team behind EcoScope is really dedicated to sustainability!"</p>
            <h4>- Michael W., CEO</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need more information, feel free to reach out to us!</p>

        <div className="contact-details">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:contact@ecoscope.com">contact@ecoscope.com</a></p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </section>

      {/* CSS Styling (Inline) */}
      <style>
        {`
          /* Smooth scroll behavior */
          html {
            scroll-behavior: smooth;
          }

          /* General styles */
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: white;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          .home {
            display: flex;
            flex-direction: column;
          }

          /* Navbar Styling */
          .navbar {
            background: linear-gradient(90deg, #000000, #333333);
            color: white;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0px 4px 10px rgba(0, 255, 0, 0.6);
            border: 2px solid #006400;
            position:static;
          }

          .logo-img {
            height: 40px;
          }

          .nav-links {
            display: flex;
            gap: 30px;
          }

          .nav-links a, .nav-links button {
            color: #00a676;
            font-size: 16px;
            border: none;
            background: none;
            cursor: pointer;
          }

          /* Hero Section */
          .hero {
            position: relative;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
            color: white;
          }

          .background-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
          }

          .hero-content {
            animation: slide-up 1s ease-out;
          }

          /* Slide-up transition for the "Welcome to EcoScope" heading */
          @keyframes slide-up {
            0% {
              transform: translateY(100px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .welcome-heading {
            font-size: 48px;
            margin-bottom: 20px;
          }

          .welcome-text {
            font-size: 20px;
            margin-bottom: 20px;
            animation: slide-side 1s ease-out;
          }

          /* Side transition for the text below */
          @keyframes slide-side {
            0% {
              transform: translateX(-100px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .cta-btn {
            background-color: #fff;
            color: #00a676;
            padding: 15px 40px;
            border-radius: 5px;
            font-size: 18px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
            border: 2px solid rgba(255, 255, 0, 0.8);
            box-shadow: 0 0 10px rgba(255, 255, 0, 0.6);
          }

          /* Gradient green background on hover */
          .cta-btn:hover,
          .cta-btn:focus {
            background: linear-gradient(135deg, #00a676, #006400); /* Gradient green color */
            color: white;
            box-shadow: 0 0 20px rgba(255, 255, 0, 0.9);
          }

          /* About Section Styling */
          .about {
            padding: 70px 30px;
            text-align: center;
            color: white;
            position: relative;
            margin-top: 10px;
          }

          .about h2 {
            font-size: 36px;
            color: #00a676;
            margin-bottom: 40px;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px rgba(0, 166, 118, 0.4);
            font-weight: bold;
          }

          .goal-boxes {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
          }

          .goal-box {
            background-color: #fff;
            padding: 30px;
            width: 22%;
            border: 2px solid #00a676;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            color: #333;
          }

          .goal-box:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 166, 118, 0.8);
          }

          .goal-box h3 {
            font-size: 24px;
            color: #006400;
            margin-bottom: 15px;
            font-weight: bold;
          }

          .goal-box p {
            font-size: 16px;
            color: #555;
          }

          /* Testimonials Section Styling */
          .testimonials {
            padding: 70px 30px;
            text-align: center;
            background: linear-gradient(135deg, #004d00, #006400);
            color: white;
          }

          .testimonials h2 {
            font-size: 36px;
            margin-bottom: 40px;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.6); /* White text shadow */
          }

          .testimonial-cards {
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
          }

          .testimonial-card {
            background-color: #fff;
            padding: 20px;
            width: 25%;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6); /* White glow around cards */
            text-align: left;
            color: #333;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .testimonial-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.8); /* Stronger white glow on hover */
          }

          .testimonial-card p {
            font-size: 16px;
            font-style: italic;
            color: #555;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Glowing effect for text */
          }

          .testimonial-card h4 {
            font-size: 18px;
            color: #00a676;
            font-weight: bold;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Glowing effect for name */
          }

          /* Contact Section Styling */
          .contact {
            padding: 70px 30px;
            background: #333;
            color: white;
            text-align: center;
          }

          .contact-details h3 {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .contact-details p {
            font-size: 16px;
            color: #ccc;
          }
        `}
      </style>
    </div>
  );
}

export default Home;

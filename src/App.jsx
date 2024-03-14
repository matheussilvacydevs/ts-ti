import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
<div className="container">
  <Hero />
  <div className="line" id="line"></div>
  <div className="divider" id="divider">
  <Services />
  </div>
  <div className="line" id="line"></div>
  <AboutUs />
  <div className="line" id="line"></div>
  <Footer />
</div>

    </>
  );
};

export default App;

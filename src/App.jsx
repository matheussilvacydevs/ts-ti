import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from './components/Services/Services';

const App = () => {
  return (
    <>
      <Navbar />
<div className="container">
  <Hero />
  <div className="divider">
  <Services />
  </div>
</div>

    </>
  );
};

export default App;

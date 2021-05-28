import React from "react";
import './HeroSection.css';
import '../../App.css';

function HeroSection() {
  return (
    <div className="hero-container">
     <video src={require('../../videos/video-2.mp4').default} autoPlay loop muted></video>
      <h1>CYCLING</h1>
      <p>The best thing that happened to mankind.</p>
    </div>
  );
}

export default HeroSection;

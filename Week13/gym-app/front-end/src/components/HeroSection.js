import React from 'react';
import '../App.css';
import './HeroSection.css';
import 'animate.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      
      
      <h1 class="animate__animated animate__fadeInDown">GYMNASTICS:</h1>
      <h2>the strength to hold on...with the courage to let go</h2>
      <div>
        <img src="https://media.gettyimages.com/photos/preparation-for-gymnastic-bars-picture-id466187861?k=20&m=466187861&s=612x612&w=0&h=ZfKr27_-sqymjT6177MTQJNnlC84H7eVgsH5P7QiTQY=" height="500" width="900" alt=""/>
      </div>
      <p>Got Chalk?!</p>
      
    </div>
  );
}

export default HeroSection;
import React from "react";
import '../App.css';
import hero from '../assets/images/hero.png';
import istore from '../assets/images/istore.png';
import playstore from '../assets/images/playstore.png';


const Home = () => {
  return (
    <div className="main">
      <div className="intro">
        <div className="intro-text">
          <div className="intro-h1">
            <h1>Start your journey with one click, explore the beautiful world</h1>
          </div>
          <div className="intro-subtext">
            <p>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!</p>
          </div>
          <div className="intro-stores">
            <img className="istore" src={istore} />
            <img className="playstore" src={playstore} />
          </div>
        </div>
        <div className="intro-image">
          <img src={hero} />
        </div>
      </div>
    </div>
  )
}

export default Home;

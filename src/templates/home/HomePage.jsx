import React from "react";
import { Parallax } from "react-parallax";
import "./ParallaxBanner.css";

const ParallaxBanner = () => {
  return (
    <div className="parallax-container">
      <Parallax bgImage="/images/background2.jpeg" strength={200}>
        <div style={{ height: 800 }}></div>
      </Parallax>
      <div className="parallax-layer planet">
        <img src="/images/planet.png" alt="Planet" strength={150} />
      </div>
      <div className="parallax-layer land">
        <img src="/images/land.png" alt="Land" strength={250} />
      </div>
      <div className="parallax-layer people">
        <img src="/images/people.png" alt="People" strength={250} />
      </div>
      <div className="parallax-layer topic">
        <h1>Your Topic Here</h1>
      </div>
    </div>
  );
};

export default ParallaxBanner;

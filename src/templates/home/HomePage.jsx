import React from "react";
import { Parallax } from "react-parallax";
import "./ParallaxBanner.css";

const ParallaxBanner = () => {
  return (
    <div className="parallax-container">
      <Parallax strength={200}>
        <div style={{ height: 800 }}></div>
      </Parallax>
      <div className="parallax-layer planet">
        <img
          src="/images/planet.png"
          alt="Planet"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <div className="parallax-layer land">
        <img src="/images/land.png" alt="Land" />
      </div>
      <div className="parallax-layer people">
        <img src="/images/people.png" alt="People" />
      </div>
      <div className="parallax-layer topic">
        <h1>Your Topic Here</h1>
      </div>
    </div>
  );
};

export default ParallaxBanner;

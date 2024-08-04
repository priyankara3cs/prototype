import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./new.css";

const Banner = () => {
  return (
    <div>
      <Parallax pages={2}>
        {/* Background Layer */}
        <div className="background-container" />

        {/* Car Image Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="car">
            <img
              src="/images/car.webp"
              alt="Car"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </ParallaxLayer>

        {/* Main Topic Text Layer */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "2rem",
          }}
        >
          <div className="main-topic">
            <h1>Main Topic</h1>
            <h2>sub Topic</h2>
          </div>
        </ParallaxLayer>
      </Parallax>
      {/* Section 2 */}
      <p>
        Welcome to the Parallax Scrolling Website project! This project
        showcases an interactive and engaging website with a parallax scrolling
        effect. The website is designed using HTML5, CSS3, and JavaScript to
        create an immersive experience for users.{" "}
      </p>
    </div>
  );
};

export default Banner;

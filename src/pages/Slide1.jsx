import React, { useEffect } from "react";
import "./slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Slide1 = ({ isActive }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <Parallax className="parallax-container" pages={1}>
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={0} className="background-layer" />

        {/* Car Image Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "slider-up 1s",
          }}
        >
          <div className="car">
            <img src="/images/car.webp" alt="Car" data-aos="fade-up" />
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
            textAlign: "center",
          }}
        >
          <div className="main-topic">
            <h1
              style={{
                animation: "slider-left 1s",
              }}
            >
              Main Topic
            </h1>
            <h2
              style={{
                animation: "slider-right 1s",
              }}
            >
              Sub Topic
            </h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Slide1;

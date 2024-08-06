import React, { useEffect, useState } from "react";
import "./slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Slide1 = ({ isActive }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <Parallax className="parallax-container" pages={1}>
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={0} className="background-layer" />

        {/* Car Image Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          strength={500}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "slider-up 1s",
            height: "100vh",
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
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      ></motion.div>
    </div>
  );
};

export default Slide1;

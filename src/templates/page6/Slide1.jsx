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
    <div
      className={`slide ${isActive ? "active" : ""}`}
      style={{ overflow: "hidden !important" }}
    >
      <Parallax
        className="parallax-container"
        pages={1}
        style={{ overflow: "hidden !important" }}
      >
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
            overflow: "hidden !important",
          }}
        >
          <div className="car" style={{ overflow: "hidden !important" }}>
            <img
              src="/images/car.webp"
              alt="Car"
              data-aos="fade-up"
              style={{ overflow: "hidden !important" }}
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
            textAlign: "center",
            overflow: "hidden !important",
          }}
        >
          <div className="main-topic" style={{ overflow: "hidden !important" }}>
            <h1
              style={{
                animation: "slider-left 1s",
                overflow: "hidden !important",
              }}
            >
              Main Topic
            </h1>
            <h2
              style={{
                animation: "slider-right 1s",
                overflow: "hidden !important",
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

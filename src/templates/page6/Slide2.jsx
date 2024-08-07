import React, { useEffect, useState } from "react";
import "./slider.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Slide2 = ({ isActive }) => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className={`slide ${isActive ? "active" : ""}`}
      style={{ overflow: "hidden !important" }}
    >
      <div
        className="custom-slider-wrapper"
        style={{ overflow: "hidden !important" }}
      ></div>
    </div>
  );
};

export default Slide2;

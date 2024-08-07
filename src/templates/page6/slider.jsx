import React, { useState, useRef, useEffect } from "react";
import "./slider.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const [showContent, setShowContent] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const handleScroll = (event) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;

    if (event.deltaY > 0) {
      // Scroll down
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex === 1 ? prevIndex : (prevIndex + 1) % 2;
        if (newIndex === 1) {
          setShowContent(true);
        }
        return newIndex;
      });
    } else if (event.deltaY < 0) {
      // Scroll up
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex === 0 ? prevIndex : prevIndex - 1;
        if (newIndex !== 1) {
          setShowContent(false);
        }
        return newIndex;
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1010); // Adjust the debounce time as needed

    // Reset the interval
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 2;
        if (newIndex === 1) {
          setShowContent(true);
        } else {
          setShowContent(false);
        }
        return newIndex;
      });
    }, 8000); // Change slide every 5 seconds
  };

  useEffect(() => {
    // Set the interval for auto-sliding
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 2;
        if (newIndex === 1) {
          setShowContent(true);
        } else {
          setShowContent(false);
        }
        return newIndex;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalRef.current); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        top: activeIndex * sliderRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div>
      <div
        className="custom-slider-wrapper"
        ref={sliderRef}
        onWheel={handleScroll}
      >
        <div className="custom-slider">
          <Slide1 isActive={activeIndex === 0} />
          <Slide2 isActive={activeIndex === 1} />
        </div>
      </div>
      {/* {showContent && (
        <div className="additional-content">
          <div className="additional-content-para"></div>
        </div>
      )} */}
    </div>
  );
};

export default CustomSlider;

import React, { useState, useRef, useEffect } from "react";
import "./slider.css";

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const [showContent, setShowContent] = useState(false);
  const sliderRef = useRef(null);

  const slides = [
    { backgroundColor: "lightblue", content: "Slide 1" },
    { backgroundColor: "lightgreen", content: "Slide 2" },
    { backgroundColor: "lightcoral", content: "Slide 3" },
  ];

  const handleScroll = (event) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;

    if (event.deltaY > 0) {
      // Scroll down
      setActiveIndex((prevIndex) => {
        const newIndex =
          prevIndex === slides.length - 1
            ? prevIndex
            : (prevIndex + 1) % slides.length;
        if (newIndex === slides.length - 1) {
          setShowContent(true);
        }
        return newIndex;
      });
    } else if (event.deltaY < 0) {
      // Scroll up
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex === 0 ? prevIndex : prevIndex - 1;
        if (newIndex !== slides.length - 1) {
          setShowContent(false);
        }
        return newIndex;
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800); // Adjust the debounce time as needed
  };

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
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? "active" : ""}`}
              style={{ backgroundColor: slide.backgroundColor }}
            >
              <h1>{slide.content}</h1>
            </div>
          ))}
        </div>
      </div>
      {showContent && (
        <div className="additional-content">
          <p>Additional content shown on the last slide.</p>
        </div>
      )}
    </div>
  );
};

export default CustomSlider;

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import "./new.css";

const Banner = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Section 1 */}
      <Parallax pages={2} className="parallax-container">
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={0} className="background-layer">
          {/* Empty layer for background */}
        </ParallaxLayer>

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
            <h1 data-aos="fade-right">Main Topic</h1>
            <h2 data-aos="fade-left">Sub Topic</h2>
          </div>
        </ParallaxLayer>
      </Parallax>
      {/* Section 2 */}
      <div className="section2">
        <h1>Next Section</h1>
      </div>
    </div>
  );
};

export default Banner;

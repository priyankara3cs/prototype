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
      <Parallax pages={3} className="parallax-container">
        {/* Section 1 */}
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

        {/* Section 2 */}
        {/* Background Layer */}
        <ParallaxLayer offset={1} speed={0} className="background-layer-2">
          {/* Empty layer for background */}
        </ParallaxLayer>

        {/* Planet Image Layer */}
        <ParallaxLayer
          offset={1}
          speed={-0.1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="planet">
            <img src="/images/planet.png" alt="planet" data-aos="fade-up" />
          </div>
        </ParallaxLayer>

        {/* Land Image Layer */}
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div className="land">
            <img src="/images/land.png" alt="land" />
          </div>
          <div className="people">
            <img src="/images/people.png" alt="land" />
          </div>
        </ParallaxLayer>

        {/* Main Topic Text Layer */}
        <ParallaxLayer
          offset={1}
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

        {/* Section 3 */}
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div className="additional-content">
            <div className="additional-content-para"></div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Banner;

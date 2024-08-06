import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import "./slider.css";
import Cursor from "../../components/Cursor";

const Slide2 = ({ isActive }) => {
  const [scaling] = useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <Parallax pages={2} className="parallax-container">
        {/* Section 1 */}
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={0} className="background-layer-2">
          {/* Empty layer for background */}
          <div>
            <Cursor scaling={scaling} />
          </div>
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
            <img src="/images/planet.png" alt="planet" data-aos="fade-up" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
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
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div>
            <div className="additional-content-para"></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div>
            <div className="additional-content-para"></div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Slide2;

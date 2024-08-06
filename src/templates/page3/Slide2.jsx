import React, { useEffect, useState } from "react";
import "./slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Cursor from "../../components/Cursor";

const Slide2 = ({ isActive }) => {
  const [scaling, setScaling] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <Parallax className="parallax-container" pages={1}>
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={0} className="background-layer-2">
          <div>
            <Cursor scaling={scaling} />
          </div>
        </ParallaxLayer>

        {/* Planet Image Layer */}
        <ParallaxLayer
          offset={0}
          speed={-0.1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "slider-up 1s",
          }}
        >
          <div className="planet">
            <img src="/images/planet.png" alt="planet" data-aos="fade-down" />
          </div>
        </ParallaxLayer>

        {/* Land Image Layer */}
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
        </ParallaxLayer>

        {/* People Image Layer */}
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
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
          <div
            className="main-topic"
            // role="button"
            // tabIndex={0}
            // onMouseEnter={() => setScaling(true)}
            // onMouseLeave={() => setScaling(false)}
            // style={{ pointerEvents: "auto" }}
          >
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

      {/* <Cursor scaling={scaling} /> */}
    </div>
  );
};

export default Slide2;

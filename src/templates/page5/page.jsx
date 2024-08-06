import React, { useEffect, useState } from "react";
import "../../components/homevideo.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Cursor from "../../components/Cursor";
import "./slider.css";

const ContractManufacturing = () => {
  const [scaling] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ParallaxProvider>
      <div style={{ overflow: "hidden" }}>
        <div className="custom-slider-wrapper">
          <div style={{ backgroundColor: "#121718" }}>
            <div style={{ position: "relative" }}>
              <div>
                <Cursor scaling={scaling} />
              </div>
              <div className="background-video" />
              <div className="top-font-block">
                <div className="planet">
                  <img
                    src="/images/planet.png"
                    alt="planet"
                    data-aos="fade-up"
                  />
                </div>
              </div>
              <div className="top-font-block">
                <div className="land">
                  <img src="/images/land.png" alt="land" />
                </div>
                <div className="people">
                  <img src="/images/people.png" alt="land" />
                </div>
              </div>
              <div className="top-font-block">
                <Parallax speed={10}>
                  <div style={{ color: "#fff" }}>
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
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ContractManufacturing;

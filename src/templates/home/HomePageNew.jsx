import React from "react";
import "./new.css";

const Banner = () => {
  return (
    <>
      {/* section 1 */}
      <div className="background-container">
        <div className="car">
          <img
            src="/images/car.webp"
            alt="Car"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="main-topic">
          <h1>Main Topic</h1>
        </div>
      </div>

      {/* section 2 */}
      <div style={{ height: "100px", backgroundColor: "#000" }}></div>
    </>
  );
};

export default Banner;

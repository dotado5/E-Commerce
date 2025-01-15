import React from "react";
import "./Components.css";

const Hero = () => {
  return (
    <section
      id="box-slides"
      className="box carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="item active">
          <img
            src="/assets/shirovka.jpg"
            alt="Shirovka"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

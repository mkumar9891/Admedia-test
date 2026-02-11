import React from "react";
import HomeSlider from "../Components/HomeSlider";
import ZackData from "../Components/ZackData";
import AboutImg from "../images/About-us.jpg";

function About({ title }) {
  return (
    <>
      <section className="about">
        <div className="container">
          <h2 className="about-banner-heading">About us</h2>
        </div>
      </section>

      <ZackData />
    </>
  );
}

export default About;

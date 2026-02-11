import React from "react";
import BannerthumbImg from "../images/banner-thumb.png";

function HomeSlider() {
  return (
    <section className="home-slider">
      <div className="container">
        <div className="row align-items-center">
          {/* TEXT AREA */}
          <div className="col-lg-7 col-md-12 text-center text-lg-start order-2 order-lg-1">
            <h3 className="banner-heading">
              A Safe, Calm and Supportive <span>Environment</span>
            </h3>

            <p className="banner-para">
              We believe small everyday choices can create a big positive impact
              on our planet. Our thoughtfully designed eco friendly products
              help you reduce waste, protect nature and build a healthier
              lifestyle without compromising comfort or quality.
            </p>

            <button className="btn quote-btn">Get A Quote</button>
          </div>

          {/* IMAGE AREA */}
          <div className="col-lg-5 col-md-12 text-center order-1 order-lg-2 mb-4 mb-lg-0">
            <img
              src={BannerthumbImg}
              alt="Banner"
              className="img-fluid banner-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;

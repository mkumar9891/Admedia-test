import React from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { GiStairsGoal } from "react-icons/gi";
import { LuMedal } from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import WaterBottal from "../images/task-img/water-bottal.webp";
import BAMBOOBASKET from "../images/task-img/bamboo-product.png";
import VEGETABLEBAG from "../images/task-img/vegitable-bag.webp";
import SKINCARE from "../images/task-img/Skin-care.png";
import whyChoos from "../images/task-img/whyChoos.jpg";
import naturalIcon from "../images/task-img/natural-icon.svg";
import naturalIcon2 from "../images/task-img/natural-icon2.svg";
import naturalIcon3 from "../images/task-img/natural-icon3.svg";

function ZackData({ title }) {
  return (
    <>
      <section className="featured-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="section-title">
              FEATURED <span>PRODUCTS</span>
            </h2>
            <div className="title-line" />
          </div>
          {/* Cards Row */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-card text-center">
                <div className="product-img">
                  <img
                    src={WaterBottal}
                    className="img-fluid"
                    alt="Water Bottal"
                  />
                </div>
                <h5>WATER BOTTLE</h5>
                <p>
                  The best water bottle depends on your needs, but stainless
                  steel and glass are top health choices for safety
                </p>

                <button class="btn quote-btn ">Shop Now</button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-card text-center">
                <div className="product-img">
                  <img
                    src={BAMBOOBASKET}
                    className="img-fluid"
                    alt="BAMBOO BASKET"
                  />
                </div>
                <h5>BAMBOO BASKET</h5>
                <p>
                  Eco friendly handcrafted bamboo baskets perfect for home
                  storage and sustainable living lifestyle.
                </p>
                <button class="btn quote-btn ">Shop Now</button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-card text-center">
                <div className="product-img">
                  <img
                    src={VEGETABLEBAG}
                    className="img-fluid"
                    alt="VEGETABLEBAG"
                  />
                </div>
                <h5>VEGETABLE BAG</h5>
                <p>
                  Reusable cotton vegetable bags help reduce plastic waste and
                  keep your groceries fresh and safe.
                </p>
                <button class="btn quote-btn ">Shop Now</button>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-card text-center">
                <div className="product-img">
                  <img src={SKINCARE} className="img-fluid" alt="SKINCARE" />
                </div>
                <h5>SKIN CARE</h5>
                <p>
                  Natural and organic skincare products made with plant based
                  ingredients safe for you and environment.
                </p>
                <button class="btn quote-btn ">Shop Now</button>
              </div>
            </div>
            <div className="w-100 text-center mt-5">
              <button class="btn quote-btn ">View More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose py-5">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="why-title">
              WHY CHOOSE <span>US</span>
            </h2>
            <div className="why-line" />
          </div>
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              {/* Item 1 */}
              <div className="why-box d-flex">
                <div className="icon-box">
                  <img src={naturalIcon} className="w-75" />
                </div>
                <div>
                  <h5>100% Natural Products</h5>
                  <p>
                    Our products are made from eco friendly and sustainable
                    materials that are safe for you and the environment.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="why-box d-flex">
                <div className="icon-box">
                  <img src={naturalIcon2} className="w-75" />
                </div>
                <div>
                  <h5>Eco Friendly Packaging</h5>
                  <p>
                    We use biodegradable packaging to reduce waste and protect
                    nature for future generations.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="why-box d-flex">
                <div className="icon-box">
                  <img src={naturalIcon3} className="w-75" />
                </div>
                <div>
                  <h5>Sustainable Sourcing</h5>
                  <p>
                    All materials are responsibly sourced from trusted suppliers
                    who follow ethical practices.
                  </p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="why-box d-flex">
                <div className="icon-box">
                  <img src={naturalIcon} className="w-75" />
                </div>
                <div>
                  <h5>Fast Delivery</h5>
                  <p>
                    Quick and reliable delivery service so you receive your eco
                    friendly products on time.
                  </p>
                </div>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src={whyChoos}
                alt="Why Choose Us"
                className="img-fluid why-img w-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zeckdata 
      <section className="py-5 about-zecdata">
        <div className="container">
          <h3 className="text-center sub-heading">{title}</h3>
          <div className="border-line"></div>
          <div className="row py-5">
            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3 pb-5">
                <span className="Zecdata-icon">
                  <LiaEyeSolid />
                </span>

                <h4 className="mt-3">Our Vision</h4>
                <p>
                  To be the leading innovator in data solutions, recognized for
                  transforming businesses through actionable insights and
                  cutting-edge technology, empowering growth and creating
                  sustainable global impact everywhere.
                </p>
                <a href="#" className="btn btn-service">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3 pb-5">
                <span className="Zecdata-icon">
                  <GiStairsGoal />
                </span>

                <h4 className="mt-3">Our Mission</h4>
                <p>
                  To empower our clients with Al-driven dala analytics and
                  custom IT solutions, enhancing their officiency, fostering
                  innovation, and delivering significant, measurable results. We
                  focus on practical solutions that drive growth
                </p>
                <a href="#" className="btn btn-service">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3 pb-5">
                <span className="Zecdata-icon">
                  {" "}
                  <LuMedal />
                </span>

                <h4 className="mt-3">Our Expertise</h4>
                <p>
                  To empower our clients with Al-driven dala analytics and
                  custom IT solutions, enhancing their officiency, fostering
                  innovation, and delivering significant, measurable results. We
                  focus on practical solutions that drive growth
                </p>
                <a href="#" className="btn btn-service">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3 pb-5">
                <span className="Zecdata-icon">
                  {" "}
                  <FaRegHandshake />
                </span>

                <h4 className="mt-3">Join us</h4>
                <p>
                  Founded in 2021 in Indore, M.P, India, Zecdata has been on a
                  mission to provide high-quality software solutions worldwide,
                  focusing on innovation, reliability, and delivering measurable
                  growth for clients.
                </p>
                <a href="#" className="btn btn-service">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3 pb-5">
                <span className="Zecdata-icon">
                  {" "}
                  <FaFlagCheckered />
                </span>

                <h4 className="mt-3">4 Years of Expertise</h4>
                <p>
                  With over four years of experience, we've had the opportunity
                  to work on a wide range of projects, continuously staying
                  ahead of emerging trends and technologies to deliver
                  exceptional solutions.
                </p>
                <a href="#" className="btn btn-service">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3 pb-5">
                <span className="Zecdata-icon">
                  <HiOutlineUserGroup />
                </span>

                <h4 className="mt-3">Our Team</h4>
                <p>
                  Our team of over 80 skilled developers and engineers is
                  dedicated to building innovative solutions that empower out
                  clients in stay ahead of the competition, consistently
                  delivering measurable results.
                </p>
                <a href="#" className="btn btn-service">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="text-center py-5">
            <Link to="/about">
              <button className="read-more">Read More</button>
            </Link>
          </div>
        </div>
      </section>*/}
    </>
  );
}

export default ZackData;

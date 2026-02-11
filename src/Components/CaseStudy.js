import React from "react";
import NQL from "../images/nql-model-research.jpg";

function CaseStudy(props) {
  return (
    <>
      <section className="case-study py-5">
        <div className="container">
          <h3 class="text-center sub-heading">Our Case Studies</h3>
          <h3 className="text-center sub-heading">{props.heading}</h3>
          <div className="border-line"></div>

          <div className="row pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3">
                <div className="service-img">
                  <img
                    src="https://zecdata.com/assets/img/aipowered-customer-segmentation.avif"
                    alt="AI-Powered Customer Segmentation"
                  />
                </div>
                <h4 className="mt-3">AI-Powered Customer Segmentation</h4>
                <p>
                  A retail company wanted to improve its marketing strategies
                  through better customer segmentation and sales.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3">
                <div className="service-img">
                  <img
                    src="https://zecdata.com/assets/img/Machine_Learning_for_Predictive_Maintenance_images.webp"
                    alt="Machine Learning for Predictive Maintenance"
                  />
                </div>
                <h4 className="mt-3">
                  Machine Learning for Predictive Maintenance
                </h4>
                <p>
                  A manufacturing company faced frequent unplanned equipment
                  failures, resulting in costly downtime and maintenance
                  expenses.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3">
                <div className="service-img">
                  <img
                    src="https://zecdata.com/assets/img/api.png"
                    alt="Fintech API Performance Enhancement"
                  />
                </div>
                <h4 className="mt-3">Fintech API Performance Enhancement</h4>
                <p>
                  A leading fintech firm faced performance issues with its APIs,
                  resulting in slower response times and system crashes under
                  heavy load.
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-3">
            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3">
                <div className="service-img">
                  <img
                    src="https://zecdata.com/assets/img/Big_Data_Analytics_Platform.jpg"
                    alt="Big Data Analytics"
                  />
                </div>
                <h4 className="mt-3">Big Data Analytics Platform</h4>
                <p>
                  A large corporation struggled to process and analyze vast
                  amounts of data from multiple sources, including internal
                  databases, social media, and IoT devices.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3">
                <div className="service-img">
                  <img
                    src="https://zecdata.com/assets/img/unifrom.webp"
                    alt="Zero Data AI Cloud"
                  />
                </div>
                <h4 className="mt-3">UNIPHORE-Zero Data AI Cloud</h4>
                <p>
                  Organizations faced challenges in finding specific, actionable
                  information from large volumes of documents. We implemented an
                  AI
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="about-zecdata-card p-3">
                <div className="service-img">
                  <img src={NQL} alt="NLQ - Model Research" />
                </div>
                <h4 className="mt-3">NLQ - Model Research</h4>
                <p>
                  Our client needed to identify the optimal machine learning
                  model for text-to-SQL generation (Natural Language Query).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudy;

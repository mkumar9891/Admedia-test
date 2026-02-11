import React from "react";
import call from "../images/conact-img-2.png";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <h3 class="text-center sub-heading">Contact Us</h3>
          <div className="border-line"></div>
          <div className="row">
            <div className="col-md-6">
              <h3>Get In Touch</h3>
            </div>

            <div className="col-md-6">
              <img src={call} className="w-100 h-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

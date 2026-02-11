import React from "react";
import Newslatter from "../images/task-img/newslater.jpg";
import user from "../images/task-img/user.svg";
import Email from "../images/task-img/email.svg";
import PhoneNo from "../images/task-img/telephone-call.svg";

function OurNewslatter() {
  return (
    <>
      <section className="newsletter-section py-5">
        <div className="container">
          {/* Title */}
          <div className="text-center mb-5">
            <h2 className="news-title">
              OUR <span>NEWSLETTER</span>
            </h2>
            <div className="news-line" />
          </div>
          <div className="row align-items-center g-4">
            {/* LEFT FORM */}
            <div className="col-lg-7">
              <div className="newsletter-box">
                <h5 className="mb-3">Join our Green Community</h5>
                <p className="mb-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. 
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <img src={user} alt="user" className="form-icon" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <img src={user} alt="user" className="form-icon" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <img src={PhoneNo} alt="user" className="form-icon" />
                        </span>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone No"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <img src={Email} alt="user" className="form-icon" />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Id"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control message-box"
                        rows={4}
                        placeholder="Write your Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12 btn-left">
                      <button class="btn quote-btn fw-semibold">
                        View More
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="col-lg-5 text-center">
              <img
                src={Newslatter}
                alt="Newsletter"
                className="img-fluid newsletter-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurNewslatter;

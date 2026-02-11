import React from "react";
import emailjs from "@emailjs/browser";
import CallImg from "../images/contact-img-1.png";
import Swal from "sweetalert2";

function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("mobile_no", e.target.mobile_no.value);
    formData.append("message", e.target.message.value);

    // SAVE TO GOOGLE SHEET
    fetch(
      "https://script.google.com/macros/s/AKfycbwIGZ6DmvxO2bWF--skzKEUfjBNZKUwNEECBDNEQ794TXXkd1ehbQx5BKIJ-OAP8i4_lg/exec",
      {
        method: "POST",
        body: formData, // ✅ IMPORTANT
      },
    )
      .then(() => {
        // SEND EMAIL AFTER SHEET SAVE
        return emailjs.sendForm(
          "service_jmbm7io",
          "template_oxjzr2e",
          e.target,
          "BrDsuaVKVSbMfquxQ",
        );
      })
      .then(() => {
        Swal.close();
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting us. We will get back to you soon.",
          confirmButtonColor: "#0d6efd",
        });
        e.target.reset();
      })
      .catch((error) => {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#dc3545",
        });
        console.error(error);
      });
  };

  return (
    <div>
      <section className="contact-us">
        <div className="container">
          <h2 className="about-banner-heading text-center">Contact Us</h2>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={CallImg} alt="Contact" className="w-100" />
            </div>

            <div className="col-md-6">
              <div className="pt-5">
                <div className="card shadow">
                  <div className="card-body">
                    <h2 className="mb-4">Quick to Connect</h2>

                    <form className="text-start" onSubmit={sendEmail}>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="mobile_no"
                          id="mobile_no"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          rows="4"
                          name="message"
                          id="message"
                          required
                        />
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;

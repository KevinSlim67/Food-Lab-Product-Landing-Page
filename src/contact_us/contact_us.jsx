import React from "react";
import "./contact_us.css";

function ContactUs() {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <div className="container">
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter email" required={true} />

          <label>Message</label>
          <textarea placeholder="Enter text" required={true} />

          <input type="submit" value="Send" />

          <div className="row">
            <button>
              <img src="assets/images/icons/message.png" alt="" />
              <span>Message</span>
            </button>

            <button>
              <img src="assets/images/icons/Phone.png" alt="" />
              <span>Get a call back</span>
            </button>
          </div>
        </form>
      </div>

      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
    </section>
  );
}

export default ContactUs;

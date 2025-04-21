import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Get in touch</h1>
      <p>Feel free to send me an email or reach out on social media.</p>
      <div className="contact-container">
        <a href="mailto:bollingmr@gmail.com">
          <div className="contact-tile">
            <img
              src="/assets/mail.svg"
              alt="Email"
            />
            <p>bollingmr@gmail.com</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mbolling/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-tile">
            <img
              src="/assets/linkedin.svg"
              alt="LinkedIn"
            />
            <p>Michael Bolling</p>
          </div>
        </a>
        <a
          href="https://github.com/bollingmr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-tile">
            <img
              src="/assets/github.svg"
              alt="GitHub"
            />
            <p>Michael Bolling</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;

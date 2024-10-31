import React, { useRef } from "react";
import "./contact.css";
import facebook from "../../assets/facebook-icon.png";
import insta from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_umwhxv7",
        "template_x8i08he",
        form.current,
        "hslMQvkFQoHX7-dvJ"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent!");
           e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDes">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name='from_name' // Matches template variable {{from_name}}
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name='from_email' // Matches template variable {{from_email}}
        />
        <textarea
          name="message" // Matches template variable {{message}}
          rows="5"
          placeholder="Your Message"
          className="msg"
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <img src={facebook} alt="Facebook link" className="link" />
          <img src={insta} alt="Instagram link" className="link" />
          <img src={twitter} alt="Twitter link" className="link" />
        </div>
      </form>
    </div>
  );
};

export default Contact;

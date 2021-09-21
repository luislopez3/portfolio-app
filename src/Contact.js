import "./Contact.css";
import React from "react";
import gmail from "./logos/gmail.png";
import linkedin from "./logos/linkedin.jpeg";
import github from "./logos/github.png";

export default function Projects() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <a href="mailto:llopez1518@gmail.com">
        <img className="contact-logo" src={gmail} alt="Gmail Logo" />
      </a>
      <a href="https://www.linkedin.com/in/luis-lopez-a7276a207">
        <img className="contact-logo" src={linkedin} alt="Linkedin Logo" />
      </a>
      <a href="https://github.com/luislopez3">
        <img className="contact-logo" src={github} alt="GitHub Logo" />
      </a>
    </section>
  );
}

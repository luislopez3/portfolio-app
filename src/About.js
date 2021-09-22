import "./About.css";
import React from "react";
import me from "./images/me.jpg";

export default function About() {
  return (
    <section id="about">
      <header className="about-header">
        <img src={me} className="about-img" alt="Luis on the beach" />
        <p className="about-img-text1">
          {" "}
          Hello! My name is Luis, but some of my other titles include: Husband,
          Father, Son, Uncle, and now, Full Stack Developer.
        </p>

        <p className="about-img-text2">
          {" "}
          For the past 12 years, I worked as a Litigation Paralegal, and many of
          the skills I have developed will most definitely translate to my new
          career as a Software Developer.
        </p>

        <p className="about-img-text3">
          {" "}
          Learning is one of my favorite things to do - being enrolled in
          Thinkful's Engineering Bootcamp, and having three months of private
          mentorship - I am very excited, because I know my journey has just
          begun.
        </p>

        <p className="about-img-text4">
          When I am not in front of the monitors, I enjoy spending time with my
          wife and toddler, traveling to new places, fly-fishing, camping,
          hunting, and cooking.
        </p>

        <p className="about-img-text5">
          Thank you for viewing my projects! If you would like to chat, please
          send me an email, or a message via LinkedIn.
        </p>
      </header>
    </section>
  );
}

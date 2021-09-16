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
          Hello! My name is Luis. I am a fifth generation New Mexican, and while
          most studies show that New Mexico is nearly last in all categories of
          things that are "good", and nearly first in things that are "bad", my
          family and I have made a very good life in the Land of Enchantment,
          dispite the negative statistics.
        </p>

        <p className="about-img-text2">
          {" "}
          My journey into the tech space began a few years ago when I began to
          explore various coding languages and their uses. After working through
          some beginner courses, and researching what it means to be a Software
          Developer, I knew this was the career path for me.
        </p>

        <p className="about-img-text3">
          {" "}
          For the past 12 years, I worked as a Litigation Paralegal, and many of
          the skills I have developed will most definitely translate to my new
          career as a Software Developer. Some of the these skills include:
        </p>
        <ol className="about-img-text4">
          <li className="about-list-item">
            Collaborating with attorneys and staff within the firm, and even
            working closely with opposing parites and their counsel in
            adversarial matters.
          </li>
          <li className="about-list-item">
            Communicating on the status of various projects with managing
            partners and staff.
          </li>
          <li className="about-list-item">
            Frequent meetings to discuss the progress of various cases and
            projects.
          </li>
          <li className="about-list-item">
            Review of upcoming deadlines to ensure they are completed timely.
          </li>
          <li className="about-list-item">
            Maintianing strong professional relationships with others within the
            firm, and building a rapport with clients, opposing counsel, Judges
            and court staff.
          </li>
        </ol>
        <p className="about-img-text5">
          When I am not in front of the monitors, I enjoy spending time with my
          wife and toddler, traveling to new places, fly-fishing, camping,
          hunting, and cooking.
        </p>
      </header>
    </section>
  );
}

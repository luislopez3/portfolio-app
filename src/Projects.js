import "./Projects.css";
import React from "react";
import restaurant from "./images/restaurant-app.jpg";
import pomodoro from "./images/pomodoro-timer.jpg";
import country from "./images/country-info.jpg";

export default function Projects() {
  function RestaurantApp() {
    return (
      <>
        <h2 className="project-list">Restaurant App</h2>
        <h3 className="project-list">
          The Restaurant App is what I and my mentor have been calling my
          capstone project. It is a full stack project that features a fictional
          restaurant where users can create orders that then appear in a backend
          database.
        </h3>
        <h4 className="project-list">
          Languages/Frameworks/Libraries Used: Chai.js, CSS, Express.js, HTML,
          JavaScript, JSX, Knex.js, Mocha, PostgreSQL, React
        </h4>

        <a className="project-link" href="https://my-restaurant-app.vercel.app">
          Browse Restaurant App
        </a>
        <a
          className="project-link"
          href="https://github.com/luislopez3/my-restaurant-app"
        >
          Browse Frontend Repo
        </a>
        <a
          className="project-link"
          href="https://github.com/luislopez3/restaurant-api"
        >
          Browse Backend Repo
        </a>
        <a href="https://my-restaurant-app.vercel.app">
          <img
            src={restaurant}
            className="project-img1"
            alt="Luis' Restaurant App"
          />
        </a>
        <hr />
      </>
    );
  }

  function PomodoroTimer() {
    return (
      <>
        <h2 className="project-list">Pomodoro Timer</h2>
        <h3 className="project-list">
          The Tomato Timer App was a fun project that utilizes all frontend
          code. It is based off of 'The Pomodoro Technique', which implements a
          series of 'focus' and 'break' durations in the hopes of improving time
          management.
        </h3>
        <h4 className="project-list">
          Languages/Frameworks/Libraries Used: CSS, HTML, JavaScript, JSX, React
        </h4>

        <a
          className="project-link"
          href="https://pomodoro-timer-project-steel.vercel.app"
        >
          Browse Pomodoro Timer
        </a>
        <a
          className="project-link"
          href="https://github.com/luislopez3/Pomodoro-Timer-Project"
        >
          Browse GitHub Repo
        </a>
        
        <a href="https://pomodoro-timer-project-steel.vercel.app">
          <img
            src={pomodoro}
            className="project-img2"
            alt="Luis' Pomodoro Timer"
          />
        </a>
        <hr />
      </>
    );
  }

  function CountryInfoApp() {
    return (
      <>
        <h2 className="project-list">Country Info App</h2>
        <h3 className="project-list">
          This App was made in the spirit of the Summer Olympic Games. It uses a
          RESTful API endpoint to access and display data on the various
          Countries around the world.
        </h3>
        <h4 className="project-list">
          Languages/Frameworks/Libraries Used: Axios.js, CSS, HTML, JavaScript,
          JSX, React
        </h4>

        <a
          className="project-link"
          href="https://country-info-app-ten.vercel.app"
        >
          View Country Info App
        </a>
        <a
          className="project-link"
          href="https://github.com/luislopez3/CountryInfoApp"
        >
          Browse GitHub Repo
        </a>
        <a href="https://country-info-app-ten.vercel.app">
          <img
            src={country}
            className="project-img3"
            alt="Luis' Country Info App"
          />
        </a>
        <hr />
      </>
    );
  }

  return (
    <section id="projects">
      <h1>Projects</h1>
      {RestaurantApp()}
      {PomodoroTimer()}
      {CountryInfoApp()}
      <h2>To be continued...</h2>
    </section>
  );
}

import "./Navbar.css";
import React from "react";

export default function Navbar() {
  return (
    <container>
      <nav className="nav-bar">
        <a className="nav-links" href="#about">About</a>
        <a className="nav-links" href="#projects">Projects</a>
        <a className="nav-links" href="#contact">Contact</a>
      </nav>
    </container>
  );
}

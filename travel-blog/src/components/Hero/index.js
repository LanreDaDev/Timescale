import React from "react";

function index() {
  return (
    <header>
      <div className="nav">
        <div className="nav__logo">
          <p>
            Travelize <span>My traveling experiences</span>
          </p>
        </div>
        <div className="nav__menu">
          <a href="#">Home</a>

          <a href="#">Blog</a>
          <a href="#" className="nav__menu__primary">
            About
          </a>
        </div>
      </div>
      <div className="hero-section">{/* <h1>SOmething</h1> */}</div>
    </header>
  );
}

export default index;

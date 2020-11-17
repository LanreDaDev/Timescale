import React from "react";
import headshot from "./images/headshot.jpg";
import heroBackground from "./images/hero-background.jpg";
import "./App.scss";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Body img={headshot} />
      <Footer />
    </div>
  );
}

export default App;

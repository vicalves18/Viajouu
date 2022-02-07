import React from "react";
import { Link } from "react-router-dom";
import Aviao from "../assets/Aviao.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Aviao})` }}>
      <div className="headerContainer">
        <h1> VIAJOOU </h1>
        <p> Viaje com segurança e qualidade!</p>
        <Link to="/menu">
          <button> Passagens </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

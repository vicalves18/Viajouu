import React from "react";
import Paisagem from "../assets/ABOUT.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Paisagem})` }}
      ></div>
      <div className="container">
        <div className="aboutBottom">
          <h1> Sobre Nós</h1>
          <p>
            Site de Viagem com melhores preços para viajar com sua Familia!
          </p>
          <p>Viaje com segurança e Qualidade aqui no <b>VIAJOUU</b></p>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import Aviao from "../assets/Aviao.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Aviao})` }}
      ></div>
      <div className="rightSide">
        <h1> Contato</h1>

        <form id="contact-form" >
          <label htmlFor="name">Nome</label>
          <input name="name" placeholder="Digite seu Nome..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Digite seu email..." type="email" />
          <label htmlFor="message">Mensagem</label>
          <textarea
            rows="6"
            placeholder="Escreva sua Mensagem..."
            name="message"
            required
          ></textarea>
          <button onClick={()=>alert('Mensagem enviada com Sucesso')} type="submit"> Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

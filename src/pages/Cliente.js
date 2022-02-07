import React from 'react';
import '../styles/Cliente.css';
 
function Cliente (){
    return(
        <div className="cliente">
            
            <div className='container'>
            <h1> Contato</h1>
            <form id="contact-form" >
                <label htmlFor="name">Nome</label>
                <input name="name" placeholder="Digite seu Nome..." type="text" required />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Digite seu email..." type="email" required />
                <label htmlFor="cpf">CPF</label>
                <input name="cpf" placeholder="Digite apenas números..." type="text" pattern="[0-9]{11}" maxLength="11" required/>
                <label htmlFor="message">Destino </label>
                <select name="select">Escolha seu Destino
                    <option value="opcao1">Rio de Janeiro - RJ</option>
                    <option value="opcao2">São Paulo - SP</option>
                    <option value="opcao1">Fortaleza - CE</option>
                    <option value="opcao1">Santa Catarina - SC</option>
                    <option value="opcao1">Minas Gerais - MG</option>
                    <option value="opcao1">Salvador - BH</option>
                </select>
                
                <button onClick={()=>alert('Passagem comprada com Sucesso')} type="submit"> Enviar Mensagem</button>
            </form>
            </div>
        </div>
    );
}
export default Cliente;
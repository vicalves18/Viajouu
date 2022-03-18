import React from 'react';
import '../styles/Cliente.css';
import {api} from '../service/api';
 
const Cliente = ({id, viagem}) => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        const value = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            cpf: document.getElementById('cpf').value,
            destinoViagem: document.getElementById('destinoViagem').value,
            
        }
        console.log(value);
        handleSave(value);
            

    }

    

    const handleSave =  async (value) => {
        console.log(value.nome)
        await api.post("/viagem",{
            "nome": value.nome,
            "email": value.email,
            "cpf": value.cpf,
            "destinoViagem":value.destinoViagem,
            "preco":value.preco
            
        }).catch(error=>console.log(error))

    
    }



    return(
        <div className="cliente">
            
            <div className='container'>
            <h1> Comprar Passagem</h1>
            <form id="contact-form"
                onSubmit={(event) => handleSubmit(event)} >
                
                <label htmlFor="name">Nome</label>
                <input id="nome" name="name" placeholder="Digite seu Nome..." type="text" required />
                <label htmlFor="email">Email</label>
                <input id="email" name="email" placeholder="Digite seu email..." type="email" required />
                <label htmlFor="cpf">CPF</label>
                <input id="cpf" name="cpf" placeholder="Digite apenas números..." type="text" pattern="[0-9]{11}" maxLength="11" required/>
                <label htmlFor="message">Destino </label>
                <select id="destinoViagem" name="select">Escolha seu Destino
                    <option value="RJ">Rio de Janeiro - RJ</option>
                    <option value="SP">São Paulo - SP</option>
                    <option value="CE">Fortaleza - CE</option>
                    <option value="SC">Santa Catarina - SC</option>
                    <option value="MG">Minas Gerais - MG</option>
                    <option value="BH">Salvador - BH</option>
                </select>
                <label htmlFor="message">Preço R$</label>
                <input id="preco" name="preco" placeholder="Digite o valor da Sua Viagem..." type="text" required />
                
                
                <button onClick={()=>alert('Passagem comprada com Sucesso')} type="submit"> Comprar</button>
            </form>
            </div>
        </div>
    );
}


  export default Cliente;
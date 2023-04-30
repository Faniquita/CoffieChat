import React, { useState, useEffect } from 'react';
import axios from "axios";





const CadLog = ()=>{

       
    //Mapeia os campos do form de cadastro
    const [campos, setValues] = useState({
        txtEmail: '',
        txtNome: '',
        nascimentoData: '',
        txtSenha: ''
    });

    //Pega os valores dos campos do form de cadastro
    //event = lugar do evento, target = objeto do evento, name = atributo do objeto
    const handleInputChange = (event)=>{
        campos[event.target.name] = event.target.value;
        setValues(campos);
    }

    //Envia os dados que foram mapeados e coletados
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        console.log(campos);
        /*axios.post('http://localhost:3000/cadlog', campos).then(response => {
            alert(response.data.dados.length + ' cadastros!');
        })*/
    }
   
   

    return(
        <>
            <div className='box'>
                <div className="content-login-registro">

                    <div className="login">
                        <form id="login" >
                            <input className="input" type="text" name="nome" placeholder="Nome" required="" />                                     
                            <input className="input" type="password" name="senha" placeholder="Senha" required="" />
                                
                            <button className="button" type="submit" name="entrar">Login</button>
                        </form>  
                    </div>
                    <div className="linha"></div>

                    <div className="cadastro">                              
                        <form id="cadastro" onSubmit={handleFormSubmit}>
                            <input className="input" id="cadEmail" type="email" name="txtEmail" onChange={handleInputChange} placeholder="Email" required="" /> 
                            <input className="input" id="cadNome" type="text" name="txtNome" onChange={handleInputChange} placeholder="Nome" required="" />                                     
                            <input className="input" id="cadData" type="date" name="nascimentoData" onChange={handleInputChange} placeholder="Data de Nacimento" required="" /> 
                            <input className="input" id="cadSenha" type="password" name="txtSenha" onChange={handleInputChange} placeholder="Senha" required="" />
                            <button className="button" type="submit" name="registrar" >Registrar-se</button>
                        </form>       
                    </div>

                </div>
            </div>
        </>
    )
}


export default CadLog;
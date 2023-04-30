import React, { useState } from "react";
import axios from "axios";


const Layout = ()=>{

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post("/api/user", {
                user,
                pass
            })
            console.log(response.data)
        }catch(error){
            console.log(error);
        }
        
    }


    return(
        <>
            <div className='box'>
                <div className="box-index">
                    <div className="content-login-registro">
                        <div className="login">
                            <form id="login" onSubmit={handleSubmit}>
                                <input className="input" type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} name="nome" placeholder="Nome" required="" />                                     
                                <input className="input" type="password" id="pass" value={pass} onChange={(e) => setPass(e.target.value)} name="senha" placeholder="Senha" required="" />
                                    
                                <button className="button" type="submit" name="entrar"> Login</button>
                            </form>                              
                        </div>
                        <div className="linha"></div>
                        <div className="text-index">
                            <p>Faça o login para ter acesso a conteúdos antecipados e poder participar de sorteios!<br/> Reservas, brindes e muito mais.</p>
                        </div>

                    </div>

                </div>                         
            </div>
        </>
    )
}

export default Layout;

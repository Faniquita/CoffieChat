
const Layout = ()=>{
    return(
        <>
            <div className='box'>
                <div className="box-index">
                    <div className="content-login-registro">
                        <div className="login">
                            <form id="login">
                                <input className="input" type="text" name="nome" placeholder="Nome" required="" />                                     
                                <input className="input" type="password" name="senha" placeholder="Senha" required="" />
                                    
                                <button className="button" type="submit" name="entrar">Login</button>
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
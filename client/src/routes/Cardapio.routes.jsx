import cafe1 from '../img/3.glbimg.com-v1-auth-0ae9f161c1ff459593599b7ffa1a1292-images-escenic-2021-12-14-17-1639514982979.png'
import cafe2 from '../img/Screen-shot-2013-11-05-at-10.19.15-AM.png'
import cafe3 from '../img/photo0jpg.jpg'
import cofcop from '../img/61915-coffee-cup-food-bean-cafe-icon.png'



const Cardapio = ()=>{
    return(
        <>
            <div className='box'>
                    <div className='title-cardapio'>
                        <p>Menu </p>
                        <img src={cofcop} alt="coffee coop" />
                        <p> Cat</p>
                    </div>
                   <div id="content-carousel">
                    <div className='menu-coffe'>
                        <div className='menu-text'>
                            <p>Venha conhecer alguns dos nossos cafés mais populares</p>
                        </div>
                        <div className="linha linha-menu"></div>
                        <div id="carousel">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-bloc" src={cafe1} alt="First slide" />
                                            <p>Coffee With Cinnamon</p>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block" src={cafe2} alt="Second slide" />
                                            <p>Coffee Matte</p>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block" src={cafe3} alt="Third slide" />
                                            <p>Coffee With Cream Cutie</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>                     
                        
                </div>                   
                    
            </div>
        </>
    )
}


export default Cardapio;
import React from 'react';
import './slides2.css';
import { Link } from 'react-router-dom'
class Slides extends React.Component{
    evento=()=>{
        console.log('funciona')
    }
    render(){
        return(
            <div className="slide-box ">
                <div className="slide_title">
                    <h3>Listas de Utiles y demás cotizaciones</h3>
                <Link to={'/listas-de-utiles'}>
                    <h3>Click Aqui</h3>
                                </Link>

                </div>
            
                <div id="carouselindicator1" className="carousel slide slide1" data-ride="carousel">
                    <ol className="carousel-indicators slide_indicators">
                        <li data-target="#carouselindicator1" data-slide-to="0" className="active"></li>
                        {/* <li data-target="#carouselindicator1" data-slide-to="1"></li>
                        <li data-target="#carouselindicator1" data-slide-to="2"></li> */}
                        {/* <li data-target="#carouselindicator1" data-slide-to="3"></li> */}
                        <li data-target="#carouselindicator1" data-slide-to="4"></li>
                        <li data-target="#carouselindicator1" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        {/* <div className="CateCont1"> */}
                        {/* <div>
                            <h3>Todos los productos</h3>
                        </div> */}
                        <div>
                                   
                            <div className="carousel-item active ">
                        {/* <Link to={'/listas-de-utiles'}> */}
                        {/* <div> */}
                                    <img src="./images/slides/CABECERAa.png" className="d-block w-100" alt="Slide1" />  
                                    {/* <Link to='listas-de-utiles'> */}
                                    {/* <p>hasdasxaslkxjans</p> */}
                                    {/* <button className="pppp" onClick={this.evento}>Holi</button> */}
                                    {/* </Link> */}
                                    {/* <p>Holi</p> */}
                        {/* </div> */}
                                
                                   {/* </Link> */}
                            </div>
                            {/* <div className="carousel-item">
                            <img src="./images/slides/b.PNG" className="d-block w-100" alt="Slide2" />
                            </div> */}
                            {/* <div className="carousel-item">
                            <img src="./images/slides/c.PNG" className="d-block w-100" alt="Slide3" />
                            </div> */}
                            {/* <div className="carousel-item">
                            <img src="./images/slides/d.PNG" className="d-block w-100" alt="Slide3" />
                            </div> */}
                            <div className="carousel-item">
                            <img src="./images/slides/S1.png" className="d-block w-100" alt="Slide3" />
                            </div>
                            
                        </div>
                    </div>
                    <a className="carousel-control-prev slide_control" href="#carouselindicator1" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next slide_control" href="#carouselindicator1" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* <div id="carouselindicator2" className="carousel slide slide2" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselindicator2" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselindicator2" data-slide-to="1"></li>
                        <li data-target="#carouselindicator2" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="./images/slides/c.jpg" className="d-block w-100" alt="Slide1" />
                        </div>
                        <div className="carousel-item">
                        <img src="./images/slides/b.jpg" className="d-block w-100" alt="Slide2" />
                        </div>
                        <div className="carousel-item">
                        <img src="./images/slides/c.jpg" className="d-block w-100" alt="Slide3" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselindicator2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselindicator2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> */}

                

            </div>
        )
    }
}
export default Slides;
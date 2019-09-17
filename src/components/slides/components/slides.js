import React from 'react';
import './slides.css';
import { Link } from 'react-router-dom'
class Slides extends React.Component{
    evento=()=>{
        console.log('funciona')
    }
    render(){
        return(
            <div className="slide-box ">
                <div>
                    <div className="slide_title1">
                        <h3>Listas de Utiles y demás cotizaciones</h3>
                    <Link to={'/listas-de-utiles'}>
                        <h3>Click Aqui</h3>
                                    </Link>

                    </div>
                    <div className="slide_title2">
                        <h3>¿Que productos quisieras ver?</h3>
                        <a href="#footer1">
                            <h3>Click Aqui</h3> 
                        </a>

                    </div>

                </div>
            
                <div id="carouselindicator1" className="carousel slide slide1" data-ride="carousel">
                    <ol className="carousel-indicators slide_indicators">
                        <li data-target="#carouselindicator1" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselindicator1" data-slide-to="4"></li>
                        <li data-target="#carouselindicator1" data-slide-to="5"></li>
                        <li data-target="#carouselindicator1" data-slide-to="6"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div>
                            <div className="carousel-item active ">
                                <img src="./images/slides/g.png" className="d-block w-100" alt="Slide1" />  
                            </div>
                            <div className="carousel-item">
                                <img src="./images/slides/e.png" className="d-block w-100" alt="Slide3" />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/slides/a.png" className="d-block w-100" alt="Slide3" />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/slides/f.png" className="d-block w-100" alt="Slide3" />
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
            </div>
        )
    }
}
export default Slides;
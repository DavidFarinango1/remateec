import React from 'react';
import './slides.css';

class Slides extends React.Component{
    render(){
        return(
            <div className="slide-box ">
                <div id="carouselindicator1" className="carousel slide slide1" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselindicator1" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselindicator1" data-slide-to="1"></li>
                        <li data-target="#carouselindicator1" data-slide-to="2"></li>
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
                    <a className="carousel-control-prev" href="#carouselindicator1" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselindicator1" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div id="carouselindicator2" className="carousel slide slide2" data-ride="carousel">
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
                </div>

                

            </div>
        )
    }
}
export default Slides;
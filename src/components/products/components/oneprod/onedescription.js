import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './onedescription.css';

class Onedescription extends PureComponent{
    render(){
        return(
            // <div>
            //     {this.props.proddetails.data.p_name}
            // </div>
            <div className="principal-box">
            <div className="PBbox a">
                <div className="PBdetails-title">Detalles del producto:</div>
                <div className="PBdetails-description">{this.props.proddetails.data.p_shortdetails}</div>
            </div>
            <div className="PBbox b">
                <div className="PBproduct prueba">{this.props.proddetails.data.p_name}</div>
                <div className="PBbox1">
                    <img src ={this.props.proddetails.data.p_principal_image} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.proddetails.data.p_secundary_image2} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.proddetails.data.p_secundary_image3} alt="producto" height="40px" weight="40px" />
                </div>
                {/* <div className="PBbox2"> */}
                <div className="slide-box2 PBbox2">
                    {/* <img src ={this.props.proddetails.data.p_principal_image} alt="producto" height="200px" weight="200px" /> */}
                    <div id="carouselindicator1" className="carousel slide slide1a" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselindicator1" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselindicator1" data-slide-to="1"></li>
                            <li data-target="#carouselindicator1" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={this.props.proddetails.data.p_principal_image} className="d-block" alt="Slide1" />
                            </div>
                            <div className="carousel-item">
                            <img src={this.props.proddetails.data.p_secundary_image2} className="d-block" alt="Slide2" />
                            </div>
                            <div className="carousel-item">
                            <img src={this.props.proddetails.data.p_secundary_image3} className="d-block" alt="Slide3" />
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
                </div>
            </div>
            <div className="PBbox c">
                <div className="PBproduct prueba2">{this.props.proddetails.data.p_name}</div>
                <div className="PBprecio"><strong>USD: </strong>{this.props.proddetails.data.p_price}</div>
                {/* <div className="PBoferta"><strong>-Por la compra de:</strong>{this.props.proddetails.data.get('offer')}</div> */}
                <div className="PBvendido-por" onClick={console.log(this.props.proddetails.data)}><strong>-Vendido por:<br /></strong>{this.props.proddetails.data.p_mybussinessname}</div>
                <div className="PBenviado-por"><strong>-Enviado por:</strong><br />{this.props.proddetails.data.p_logistic_seller}</div>
                <div className="PBformas de pago"><strong>-Formas de pago:</strong> <br />Pago al momento de la entrega</div>
                {/* <Link to='/ShoppingCart/Logged'> */}
                <div className="PBbutton-sell">
                    <button 
                    // className="PBventa"
                    type="button" className="btn btn-outline-primary"
                    onClick={() => this.props.handleOnAddUnit(this.props.proddetails)}
                    >
                    Agregar al carrito
                    </button>
                </div>
                {/* </Link> */}
            </div>
        </div>
        )
    }
}


export default Onedescription;
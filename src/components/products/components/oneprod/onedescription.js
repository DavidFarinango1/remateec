import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './onedescription.css';

class Onedescription extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            // imagen1: this.props.oneproduct.p_principal_image,
            // imagen2: this.props.oneproduct.p_secundary_image2,
            // imagen3: this.props.oneproduct.p_secundary_image3,
            // principalimg: this.props.oneproduct.p_principal_image,
        }
    }
    // onClickimg1=()=>{
    //     this.setState({
    //         principalimg: this.props.oneproduct.p_principal_image,
    //     })
    // }
    // onClickimg2=()=>{
    //     this.setState({
    //         principalimg: this.props.oneproduct.p_secundary_image2,
    //     })
    // }
    // onClickimg3=()=>{
    //     this.setState({
    //         principalimg: this.props.oneproduct.p_secundary_image3,
    //     })
    // }
    render(){
        return(
            <div className="principal-box">
            <div className="PBbox a">
                <div className="PBdetails-title">Detalles del producto:</div>
                <div className="PBdetails-description">{this.props.oneproduct.p_shortdetails}</div>
            </div>
            <div className="PBbox b">
                <div className="PBproduct prueba">{this.props.oneproduct.p_name}</div>
                <div className="PBbox1">
                    {/* <div onClick={this.onClickimg1}>
                        <img src ={this.state.imagen1} alt="producto" height="40px" weight="40px" />   
                    </div>
                    <div onClick={this.onClickimg2}>
                        <img src ={this.state.imagen2} alt="producto" height="40px" weight="40px" />
                    </div>
                    <div onClick={this.onClickimg2}>
                        <img src ={this.state.imagen3} alt="producto" height="40px" weight="40px" />
                    </div> */}
                    <img src ={this.props.oneproduct.p_principal_image} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.oneproduct.p_secundary_image2} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.oneproduct.p_secundary_image3} alt="producto" height="40px" weight="40px" />
                </div>
                <div className="PBbox2">
                    <img src ={this.props.oneproduct.p_principal_image} alt="producto" height="200px" weight="200px" />
                </div>
            </div>
            <div className="PBbox c">
                <div className="PBproduct prueba2">{this.props.oneproduct.p_name}</div>
                <div className="PBprecio"><strong>USD: </strong>{this.props.oneproduct.p_price}</div>
                {/* <div className="PBoferta"><strong>-Por la compra de:</strong>{this.props.oneproduct.get('offer')}</div> */}
                <div className="PBvendido-por"><strong>-Vendido por:</strong>{this.props.oneproduct.autor_email}</div>
                <div className="PBenviado-por"><strong>-Enviado por:</strong>{this.props.oneproduct.p_logistic_seller}</div>
                <div className="PBformas de pago"><strong>-Formas de pago:</strong> <br />Pago al momento de la entrega</div>
                <Link to='/ShoppingCart/Logged'>
                <div className="PBbutton-sell"><button className="PBventa">Agregar al carrito</button></div>
                </Link>
            </div>
        </div>
        )
    }
}


export default Onedescription;
import React,{Component} from 'react';

import {Link} from 'react-router-dom';

import './scl2.css'

class ShoppingCartLogged extends Component{
    totalProduct(product){
        var a = this.props.price
        var b = this.props.units
        var total = a*b
        return total
    }
    render(){
        return(
            <div className="SHL-principalbox">
                <div className="SHLbox-a">
                    {/* <img src="" alt="principal-image" /> */}
                    {/* <Link to={{
                        pathname: '/products',
                        search: `?id=${this.props.id}`,
                        }}
                        id={this.props.id}
                    > */}
                    <Link to={'/product/' + this.props.id}>
                        <div className="SHL1">
                            <img 
                            className="SHL1_1"
                            src={this.props.principal_image} 
                            alt='img prod.'  
                            // onClick={this.handleClick}
                            />
                        </div>
                    </Link>
                </div>    
                <div className="SHLbox-b">
                    <p className="SHL-b-word"><strong>{this.props.name}</strong></p>
                </div>
                <div className="SHLbox-c">
                    <p className="SHL-c-word">Disponible</p>
                </div>
                <div className="SHLbox-d">
                    <p className="SHL-d-word">Envio gratis si el total del pedido pasa los $20,00</p>
                </div>
                <div className="SHLbox-e">
                    <button type="button" className="btn btn-light SHL-e-button" onClick={() => this.props.handleDeleteFromCart()}>Quitar producto</button>   
                    <button type="button" className="btn btn-light SHL-e-button2hidden" onClick={() => this.props.handleDeleteFromCart()}>Quitar</button>   
                </div>
                <div className="SHLbox-f">
                    <p className="SHL-f-word">${this.props.price}</p>
                </div>
                <div className="SHLbox-g">
                    <button type="button" className="btn btn-light SHLrest" onClick={() => this.props.onDeductUnit()}>-</button>
                    <p className="SHL-g-word">{this.props.units}</p>
                    <button type="button" className="btn btn-light SHLplus" onClick={() => this.props.onAddUnit()}>+</button>
                </div>
                <div className="SHLbox-h">
                    <p className="SHL-h-word">${this.totalProduct()}</p>
                </div>
            </div>
        )
    }
}
export default ShoppingCartLogged;
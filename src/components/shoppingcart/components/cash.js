import React, { Component } from 'react'
import './cash.css'
class Cash extends Component{
    render(){
        return(
            <div>
                <div>
                    <img className="Cash_img_logo" src={`/images/weygo/logo.png`} alt='logo' />
                    <p className="Cash_p"><strong>Ventasquito</strong></p>
                </div>
                <p className="Cash_details">
                    Al finalizar la compra te llegará un correo con los productos comprados, posteriormente uno de nuestros vendedores se pondrá en contacto contigo.
                </p>
                <div className="Cash_buttons">
                    <button type="button" className="btn btn-outline-danger" onClick={this.props.buyReturn}>
                        Atrás
                    </button>
                    <button type="button" className="btn btn-outline-primary" onClick={this.props.buyProp}>
                        Finalizar compra
                    </button>
                </div>
            </div>
        )
    }
}
export default Cash;
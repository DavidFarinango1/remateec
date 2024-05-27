import React, { Component } from 'react'
import './cash.css'
class Cash extends Component{
    render(){
        return(
            <div>
                <div>
                    <img className="Cash_img_logo" src={`/images/weygo/R.jpg`} alt='logo' />
                    <p className="Cash_p"><strong>Remateec</strong></p>
                </div>
                <p className="Cash_details">
                    Al finalizar la compra te llegará un <strong>WhatsApp</strong> confirmando los detalles de tu compra y coordinando el envio y valor final a pagar a tu celular, muchas gracias por preferirnos.
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
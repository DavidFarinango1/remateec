import React, { Component } from 'react'

class Cash extends Component{
    render(){
        return(
            <div>
                <h6>
                    Al finalizar la compra te llegará un correo con los productos comprados, posteriormente uno de nuestros vendedores se pondrá en contacto contigo.
                </h6>
                <button  onClick={this.props.buyReturn}>
                    Atrás
                </button>
                <button  onClick={this.props.buyProp}>
                    Finalizar compra
                </button>
            </div>
        )
    }
}
export default Cash;
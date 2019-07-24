import React, { Component } from 'react'

class PayBox extends Component{
    render(){
        return(
            <div>
                <div>
                    <h5 onClick={this.datosF}>Datos para la factura</h5>
                    <h4>Nombre:</h4>
                    <p>{this.props.dataOrder.name}</p>
                    <h4>Correo:</h4>
                    <p>{this.props.dataOrder.email}</p>
                    <div>
                        <h4>Nombre de la empresa:</h4>
                        <input className="myaccinput1 form-control mr-sm-8" name="mybussinessname" value={this.props.dataOrder.mybussinessname} type="text" onChange={this.props.onActionChange2}  maxLength="200" data-length="200" required></input>
                    </div>
                    <div >
                        <h4>Mi número de teléfono:</h4>
                        <input className="myaccinput1 form-control mr-sm-8" name="mycell" value={this.props.dataOrder.mycell} type="text" onChange={this.props.onActionChange2} maxLength="15" data-length="15" required></input>
                    </div>
                    <div>
                        <h4>Mi dirección, para las compras realizadas y para sus ventas:</h4>
                        <input className="myaccinput2 form-control mr-sm-8" name="mygps" value={this.props.dataOrder.mygps} type="text" onChange={this.props.onActionChange2}  maxLength="200" data-length="200" required></input>
                    </div>
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">Efectivo</label>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                </div>
                <button type="submit">Siguiente</button>
            </div>
        )
    }
}
export default PayBox;
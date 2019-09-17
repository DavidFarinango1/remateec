import React, { Component } from 'react'
import './paybox.css'
class PayBox extends Component{
    render(){
        return(
            <div>
                <div className="PayBox_details">
                    <h1>Datos para el comprobante</h1>
                    <div className="PayBox_det_1">
                        <p className="PayBox_det_1_strong"><strong>Nombre:</strong></p>
                        <p>{this.props.dataOrder.name}</p>
                    </div>
                    <div className="PayBox_det_1">
                        <p className="PayBox_det_1_strong"><strong>Cédula:</strong></p>
                        <input className="PayBox_det_1_input form-control mr-sm-8" name="mybussinessname" value={this.props.dataOrder.mybussinessname} type="number" onChange={this.props.onActionChange2}  maxLength="200" data-length="200" required></input>
                    </div>
                    <div className="PayBox_det_1">
                        <p className="PayBox_det_1_strong"><strong>Mi celular:</strong></p>
                        <input className="PayBox_det_1_input form-control mr-sm-8" name="mycell" value={this.props.dataOrder.mycell} type="number" onChange={this.props.onActionChange2} maxLength="15" data-length="15" required></input>
                    </div>
                    <div>
                        <p className="PayBox_det_1_strong2 "><strong>Mi dirección de entrega:</strong></p>
                        <input className="PayBox_det_1_input2 form-control mr-sm-8" name="mygps" value={this.props.dataOrder.mygps} type="text" onChange={this.props.onActionChange2}  maxLength="200" data-length="200" required></input>
                    </div>
                    <div >
                        <h4 className="PayBox_det_2">Detalle:</h4>
                        <p className="PayBox_det_2p">Subtotal de productos <strong>({this.props.onTotalProducts} productos)</strong></p>
                        <p className="PayBox_det_2p">Total a pagar: <strong>${Number(this.props.onTotalAmount.toFixed(2))}</strong></p>
                    </div>
                </div>
                <div className="form-group form-check PayBox_form">
                    <label className="form-check-label PayBox_form_label" htmlFor="exampleCheck1">Efectivo</label>
                    <input type="checkbox" className="form-check-input PayBox_form_input" id="exampleCheck1" required/>
                </div>
                <button type="submit" className="btn btn-outline-primary PayBox_det_submit">Siguiente</button>
                <p className='SignIn_problems' >Tus datos solo serán requeridos una vez y estan a tu completa disposición para cualquier modificación o eliminación.<br/> Tu compra es 100% segura y privada.<br/> Gracias por preferirnos! </p>
            </div>
        )
    }
}
export default PayBox;
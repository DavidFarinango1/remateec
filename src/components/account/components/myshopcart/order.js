import React, { Component } from 'react'
import './order.css'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')
class Order extends Component{
    totalAmount(cartArray) {
        return cartArray.reduce((acum, item) => {
                acum += item.price * item.units;
                return acum;
            }, 0);
    }
    totalProducts(cartArray){
        return cartArray.reduce((acum, item)=>{
            acum += item.units;
            return acum;
        }, 0);
    }
    render(){
        return(
            <div>
                {
                    this.props.order && this.props.order !== undefined ? this.props.order.map((item,key)=>(
                    <div className='ordertotal' key={key}>
                        <div>
                            <h4 className='ordertotalpedido'>Pedido #{item.id}</h4> 
                            <h6>Fecha: {moment(item.data.order_at.toDate()).calendar()} </h6>
                            <p><strong>Total a cobrar: </strong>${Number((item.data.total_order*1.12).toFixed(2))}</p>
                        </div>
                        <div className='Orderbox'>
                            <div>
                                <strong onClick={this.onclickar}>Datos del comprador</strong>
                                <p>{item.data.order_by[0].u_mybussinessname}</p>
                                <p>{item.data.order_by[0].u_name}</p>
                                <p>{item.data.order_by[0].u_cell}</p>
                                <p>{item.data.order_by[0].u_email}</p>
                                <p>{item.data.order_by[0].u_gps}</p>
                            </div>
                            <div>
                                <strong>Detalle del pedido</strong>
                                {
                                    item.data.s_prod.map((item,key)=>(
                                        <div key={key}>
                                            <p className="order_eachone">
                                            {item.name}
                                            </p>
                                            <p className="order_eachone">
                                            {item.units}.........{item.price}........<strong>Total: {item.price*item.units}</strong>
                                            </p>
                                        </div>
                                    ))
                                }
                                <div style={{borderBottom: '1px dashed rgba(0,0,0,.5)'}}>
                                    <div style={{display: 'flex', margin: '0 1em 0 4em', justifyContent: 'space-between'}}>
                                        <p style={{opacity: '.8'}} className="PayBox_det_2pa">Subtotal: </p>
                                        <p style={{opacity: '.8', textAlign: 'end'}} className="PayBox_det_2pa">${Number(item.data.total_order.toFixed(2))}</p>
                                    </div>
                                    {/* <div style={{display: 'flex', margin: '0 1em 0 4em', justifyContent: 'space-between'}}>
                                        <p style={{opacity: '.8'}} className="PayBox_det_2pa">Envio:</p>
                                        <p style={{opacity: '.8', textAlign: 'end'}} className="PayBox_det_2pa">Gratis</p>
                                    </div> */}
                                    <div style={{display: 'flex', margin: '0 1em 0 4em', justifyContent: 'space-between'}}>
                                        <p style={{opacity: '.8'}} className="PayBox_det_2pa">Impuestos:</p><br/>
                                        <p style={{opacity: '.8', textAlign: 'end'}} className="PayBox_det_2pa">Ya incluidos</p>
                                    </div>
                                    <div style={{display: 'flex', margin: '0 1em 0 4em', justifyContent: 'space-between'}}>
                                        <p style={{opacity: '.8'}} className="PayBox_det_2pa">Envio:</p><br/>
                                        <p style={{opacity: '.8', textAlign: 'end'}} className="PayBox_det_2pa">Por coordinar</p>
                                    </div>
                                </div>
                                <p style={{marginRight: '1em'}} className="PayBox_det_2pa">Total: <strong>${Number((item.data.total_order*1).toFixed(2))}</strong></p>
                            </div>
                            <div>
                                <strong>Status</strong>
                                <p>pagado</p>
                                <p>en entrga</p>
                                <p>entregado</p>
                            </div>
                        </div>
                    </div>
                    )):null
                }

            </div>
        )
    }
}
export default Order;
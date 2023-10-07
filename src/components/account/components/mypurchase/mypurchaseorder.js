import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/es'
class MyPurchaseOrder extends Component{
    render(){
        return(
            <div>
                {
                    this.props.order2 && this.props.order2 !== undefined ? this.props.order2.map((item,key)=>(
                        <div className='ordertotal' key={key}>
                            <div>
                                <h4 className='ordertotalpedido'>Pedido #{item.id}</h4> 
                                <h6>Fecha: {
                                    moment(item.data.order_at.toDate()).calendar()
                                    // moment.locale('es')
                                    } </h6>

                            </div>

                            <div className='MypurhaseOrderbox'>
                                <div className="MypOBD">
                                    <div className="MypOBDp">
                                        <strong>Datos del comprador:</strong>
                                        <p><strong>Cédula: </strong>{item.data.order_by[0].u_mybussinessname}</p>
                                        <p><strong>Contacto: </strong>{item.data.order_by[0].u_cell}</p>
                                    </div>
                                    <div className="MypOBDp">
                                        <strong>Datos del vendedor:</strong>
                                        <p><strong>Cédula: </strong>1713921334</p>
                                        <p><strong>Contacto: </strong>0991200163</p>
                                    </div>
                                    <div>
                                        {/* <p><strong>Status:</strong>En proceso</p> */}
                                        {/* <p><strong>Status:</strong>{item.data.o_status}</p> */}
                                        {/* <p><strong>Status:</strong><span className="badge badge-pill badge-info">{item.data.o_status}</span></p> */}
                                        <p><strong>Status:</strong><span className="badge badge-pill badge-info">{item.data.o_status}</span></p>
                                        <p><strong>Total a pagar: </strong>{Number((item.data.total_order*1).toFixed(2))}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <strong>Detalle del pedido</strong>
                                    </div>
                                    <div className="MypOBDpdescription">
                                        <p><strong>Cantidad</strong></p>
                                        <p><strong>Descripción</strong></p>
                                        <p><strong>Precio Unit.</strong></p>
                                        <p><strong>Precio Total</strong></p>
                                    </div>
                                    {
                                        item.data.s_prod.map((item,key)=>(
                                            <div className="MypOBDpdescription2" key={key}>
                                                <p>
                                                {item.units}
                                                </p>
                                                <p>
                                                {item.name}
                                                </p>
                                                <p>
                                                {parseFloat(item.price).toFixed(2)}
                                                </p>
                                                <p>
                                                {parseFloat(item.units*item.price).toFixed(2)}
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
                                            <p style={{opacity: '.8'}} className="PayBox_det_2pa">Envío:</p><br/>
                                            <p style={{opacity: '.8', textAlign: 'end'}} className="PayBox_det_2pa">Por coordinar</p>
                                        </div>
                                    </div>
                                    <p style={{marginRight: '1em'}} className="PayBox_det_2pa">Total a pagar: <strong>${Number((item.data.total_order*1).toFixed(2))}</strong></p>

                                </div>
                            </div>
                        </div> 
                    )):null
                }
            </div>
        )
    }
}
export default MyPurchaseOrder;
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
                                <h4>Pedido #{item.id}</h4> 
                                <h6>Fecha: {
                                    moment(item.data.order_at.toDate()).calendar()
                                    // moment.locale('es')
                                    } </h6>

                            </div>

                            <div className='MypurhaseOrderbox'>
                                <div className="MypOBD">
                                    <div className="MypOBDp">
                                        <strong>Datos del vendedor</strong>
                                        <p><strong>Empresa: </strong>{item.data.order_by[0].u_mybussinessname}</p>
                                        <p><strong>Contacto: </strong>{item.data.order_by[0].u_cell}</p>
                                    </div>
                                    <div>
                                        <p><strong>Status</strong>: En proceso</p>
                                        <p><strong>Total a pagar: </strong>{parseFloat(item.data.total_order).toFixed(2)}</p>
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
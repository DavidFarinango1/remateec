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

                            <div className='Orderbox'>
                                <div>
                                    <strong>Datos del vendedor</strong>
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
                                                <p>
                                                {item.name}
                                                </p>
                                                <p>
                                                {item.bName}
                                                {item.cell}
                                                {item.email}
                                                </p>
                                                <p>
                                                {item.units}
                                                </p>
                                            </div>
                                        ))
                                    }
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
                <h4>Pedido N°1</h4>
                <div>
                    Datos del vendedor
                </div>
                <div>
                    Detalle del pedido
                </div>
                <div>
                    Status
                </div>
            </div>
        )
    }
}
export default MyPurchaseOrder;
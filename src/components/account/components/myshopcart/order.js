import React, { Component } from 'react'
import './order.css'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')
class Order extends Component{
    // console.log(this.props.order)
    render(){
        return(
            <div>
                {
                    this.props.order && this.props.order !== undefined ? this.props.order.map((item,key)=>(
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
                                <strong>Datos del comprador</strong>
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
                {/* <h4>Pedido N°1</h4> */}
                {/* <div className='Orderbox'> */}
                    {/* <div>
                        <p>Datos del comprador</p>
                        <br/>
                        {
                            this.props.order && this.props.order !== undefined ? this.props.order.map((item,key)=>(
                                <div key={key}>{item.data.order_by.map((item2)=>(
                                    <div>{item2.u_mybussinessname}</div>
                                ))}
                                </div>
                            )):null
                        }
                    </div> */}
                    {/* <div>
                        Datos del comprador
                        <p>{this.props.data.order_by[0].u_mybussinessname}</p>
                        <p>{this.props.data.order_by[0].u_name}</p>
                        <p>{this.props.data.order_by[0].u_cell}</p>
                        <p>{this.props.data.order_by[0].u_email}</p>
                        <p>{this.props.data.order_by[0].u_gps}</p>
                    </div>
                    <div>
                        Detalle del pedido
                        {
                            this.props.data.s_prod.map((item,key)=>(
                                <div>
                                    <p>
                                    {item.name}
                                    </p>
                                    <p>
                                    {item.units}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        Status
                        <p>pagado</p>
                        <p>en entrga</p>
                        <p>entregado</p>
                    </div> */}
                {/* </div> */}
            </div>
        )
    }
}
export default Order;
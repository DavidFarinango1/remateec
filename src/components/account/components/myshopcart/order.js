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
                            <h4>Pedido #{item.id}</h4> 
                            <h6>Fecha: {moment(item.data.order_at.toDate()).calendar()} </h6>
                            <p><strong>Total a cobrar: </strong>{item.data.total_order}</p>
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
                                {
                                    
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

            </div>
        )
    }
}
export default Order;
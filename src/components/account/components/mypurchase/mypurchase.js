import React, { Component } from 'react'
import MyPurchaseOrder from './mypurchaseorder'
import './mypurchase.css'

class MyPurchase extends Component {
    render(){
        return(
            <div className='MyaccountBOX'>
                <h2>Historial de pedidos</h2>
                <MyPurchaseOrder />
            </div>
        )
    }
}
export default MyPurchase;
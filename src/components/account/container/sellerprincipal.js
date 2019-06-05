import React, { Component } from 'react'
import Header from '../../header/container/headercontainer'
import ItemSeller from '../components/myitems'
import Myaccount from '../components/myaccount/myaccount'
import './sellerprincipal.css'

class Seller extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="SellerPBOX">
                    <div className="SellerPBOX1">
                        <ItemSeller />
                    </div>
                    <div className="SellerPBOX2">
                        <Myaccount />
                    </div>
                </div>
            </div>
        )
    }
}
export default Seller;
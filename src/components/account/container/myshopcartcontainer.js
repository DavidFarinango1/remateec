import React, { Component } from 'react'
import MyShopCart from '../components/myshopcart/myshopcart'
import Header from '../../header/container/headercontainer'
import ItemSeller from '../components/myitems'
import Footer from '../../footer/container/footer-container'

class MyShopCartContainer extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="SellerPBOX">
                    <div className="SellerPBOX1">
                        <ItemSeller />
                    </div>
                    <div className="SellerPBOX2">
                        <MyShopCart />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default MyShopCartContainer;
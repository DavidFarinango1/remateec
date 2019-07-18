import React, { Component } from 'react'
import MyPurchase from '../components/mypurchase/mypurchase'
import Header from '../../header/container/headercontainer'
import ItemSeller from '../components/myitems'
import Footer from '../../footer/container/footer-container'

class MyPurchaseContainer extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="SellerPBOX">
                    <div className="SellerPBOX1">
                        <ItemSeller />
                    </div>
                    <div className="SellerPBOX2">
                        <MyPurchase />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default MyPurchaseContainer;
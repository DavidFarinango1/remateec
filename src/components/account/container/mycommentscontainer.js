import React, { Component } from 'react'
import MyComments from '../components/mycomments/mycomments'
import Header from '../../header/container/headercontainer'
import ItemSeller from '../components/myitems'
import Footer from '../../footer/container/footer-container'

class ComentsContainer extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="SellerPBOX">
                    <div className="SellerPBOX1">
                        <ItemSeller />
                    </div>
                    <div className="SellerPBOX2">
                        <MyComments />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default ComentsContainer;
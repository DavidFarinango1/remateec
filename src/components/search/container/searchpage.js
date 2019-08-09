import React, { Component } from 'react'
import Header from '../../header/container/headercontainer'
import Footer from '../../footer/container/footer-container'
import Search from '../components/search'
import CartContainer from '../../Cart/cart_container'

const SearchPageContainer = (props) => {
    const id = props.match.params.id;
    return(
        <div>
            <Header />
            <div className="SCLimageccontainer">
                <img className="SCLimage" src = "/images/weygo/weygo-gracias-por-la-compra.png" alt="gracias por su compra" />
            </div>
            <div className="CateCont2">
                    <div className="CateCont2_1">
                        <Search id={id} />
                        {/* <OneProdCateg 
                        products2={this.state.products}
                        handleOnAdd={this.dispachAddToCart}
                        /> */}
                    </div>
                    <div className="CateCont3">
                        <CartContainer />
                    </div>
            </div>
            {/* <Search id={id} /> */}
            <Footer />
        </div>
    )
}
export default SearchPageContainer;
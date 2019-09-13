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
            <div className="SPCimageccontainer">
                <img className="SCLimage" src = "/images/weygo/weygo-gracias-por-la-compra.png" alt="gracias por su compra" />
            </div>
            <div className="CateCont2_search">
                    <div className="CateCont2_1_search">
                        <Search id={id} />
                    </div>
                    <div className="CateCont3_search">
                        <CartContainer />
                    </div>
            </div>
            {/* <Search id={id} /> */}
            <Footer />
        </div>
    )
}
export default SearchPageContainer;
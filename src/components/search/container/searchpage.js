import React, { Component } from 'react'
import Header from '../../header/container/headercontainer'
import Footer from '../../footer/container/footer-container'
import Search from '../components/search'

const SearchPageContainer = (props) => {
    const id = props.match.params.id;
    return(
        <div>
            <Header />
            <Search id={id} />
            <Footer />
        </div>
    )
}
export default SearchPageContainer;
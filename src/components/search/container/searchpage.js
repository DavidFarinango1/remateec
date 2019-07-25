import React, { Component } from 'react'
import HomeLayout from '../../page/components/home-layout'
import Header from '../../header/container/headercontainer'
import Slides from '../../slides/components/slides'
import Categories from '../../categories/container/categoriescontainer'
import Footer from '../../footer/container/footer-container'

class SearchPage extends Component{     
    render(){
        return(
            <HomeLayout>
                <Header />
                {/* <Slides /> */}
                <Categories />
                <Footer />
            </HomeLayout>
        )
    }
}
export default SearchPage
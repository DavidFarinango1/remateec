import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Header from '../../header/container/headercontainer'
import Slides from '../../slides/components/slides'
import Categories from '../../categories/container/categoriescontainer'
import Footer from '../../footer/container/footer-container'
import SocialN from '../../SocialN/container/socialn-container'

class Home extends Component{     
    render(){
        return(
            <HomeLayout>
                <Header />
                <Slides />
                <Categories />
                <Footer />
                <SocialN />
            </HomeLayout>
        )
    }
}
export default Home
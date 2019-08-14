import React, { Component } from 'react'
import Header from '../../header/container/headercontainer'
import Privacity from '../components/privacity'
import Footer from '../../footer/container/footer-container'
import './privacity.css'
class PrivacityContainer extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="Privacity_box">
                    <Privacity />
                </div>
                <Footer />
            </div>
        )
    }
}
export default PrivacityContainer;
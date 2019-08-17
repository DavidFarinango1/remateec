import React, { Component } from 'react'
import Header from '../../header/container/headercontainer'
import Terms from '../components/terms'
import Footer from '../../footer/container/footer-container'
import './terms.css'
class TermsContainer extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="Terms_box">
                    <Terms />
                </div>
                <Footer />
            </div>
        )
    }
}
export default TermsContainer;
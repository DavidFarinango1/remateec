import React, {Component} from 'react'
import Header from '../../header/container/headercontainer'
// import Slides from '../../slides/components/slides'
// import School from '../components/school'
import Contact from '../components/contact'
import Footer from '../../footer/container/footer-container'
class ContactContainer extends Component{
    render(){
        return(        
            <div>
                <Header />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default ContactContainer;
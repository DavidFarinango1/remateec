import React, {Component} from 'react'
import Header from '../../header/container/headercontainer'
import Slides2 from '../../slides2/components/slides2'
import School from '../components/school'
import Footer from '../../footer/container/footer-container'
import {Link} from 'react-router-dom'
class SchoolContainer extends Component{
    render(){
        return(        
            <div>
                <Header />
                <Slides2 />
                <School />
                <Footer />
            </div>
        )
    }
}

export default SchoolContainer;
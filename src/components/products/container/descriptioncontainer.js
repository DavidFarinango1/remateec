import React, {Component} from 'react'
import Description from '../components/description';
import Header from '../../header/container/headercontainer'
import Footer from '../../footer/container/footer-container'

const DescriptionContainer = (props) => {
    const id = props.match.params.id;
    return(
        <div>
            <Header />
            <Description id={id} />
            <Footer />
        </div>
    )
}
export default DescriptionContainer;
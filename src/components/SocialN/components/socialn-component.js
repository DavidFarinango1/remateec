import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import './socialn-component.css';

class SocialN extends React.Component{
    render(){
        const {
            inputValue_contact_name,
            inputValue_contact_email,
            inputValue_contact_cell,
            inputValue_contact_message,
            inputValue_more_products,
        } = this.props.state; 
        return(
        <div className="socialncontainer">
            <div className="socialNf">
            <a  href="https://www.instagram.com/ventasquito_tech/"><img src = {`/images/linksocial/icono-instagram.PNG`} alt="logo" /></a>
            </div>
            <div className="socialNf">
            <a  href="https://www.facebook.com/ventasquito.tech"><img src = {`/images/linksocial/a4.PNG`} alt="logo" /></a>
            </div>
            <div className="socialNf">
            <a  href="https://wa.me/message/XHZZAAUQB3MXJ1"><img src = {`/images/linksocial/a1.PNG`} alt="logo" /></a>
            </div>
           
            
        </div>
        )
    }
}
export default SocialN;
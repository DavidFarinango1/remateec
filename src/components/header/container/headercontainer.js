import React,{Component} from 'react';
import Header from '../components/header.js';
import Subheader from '../components/subheader.js';

class HeaderContainer extends Component {
    render(){
        return(
            <div>
                <Header  />
                <Subheader />
            </div>    
        )
    }
}


export default HeaderContainer
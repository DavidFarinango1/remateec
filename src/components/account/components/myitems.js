import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../../../Firebase'
import './myitems.css'

class ItemsSeller extends Component{
    constructor(props){
        super(props);
        this.state = {
            authUser: null,
            username: '',
            image: "./images/users/usuario.png",
        };
    }
    componentDidMount(){
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser =>{
            authUser
            ? this.setState({ authUser, username: authUser.displayName })
            : this.setState({ authUser:null });
            console.log(authUser)
        })
        this.listener2 = this.props.firebase.auth.onAuthStateChanged(image =>{
            if(image){
                if(image.photoURL){
                    return this.setState({image: image.photoURL})
                }else{
                    return this.setState({image: "./images/users/usuario_auth.png"});
                }
            }else{
                return this.setState({image: "./images/users/usuario.png"});
            }
        })
    }
    componentWillUnmount(){
        this.listener();
        this.listener2();
    }
    render(){
        return(
            <div className="ItemSeller-container">
                <div className="ItemSellerBox1">
                    <img  src ={this.state.image} id='avatar' alt="avatar_usuario" />
                    <p>{this.state.username}</p>
                </div>
                <div className="ItemSellerBox2 ItemSellerLinks">
                    <Link to ={ROUTES.MYACCOUNT}>
                        {/* <div className="ItemSellerBox2" > */}
                            <p>Mi cuenta</p>
                        {/* </div> */}
                    </Link>
                    <Link to ={ROUTES.MYPRODUCTS}>
                        {/* <div className="ItemSellerBox3"> */}
                            <p>Mis productos</p>
                        {/* </div> */}
                    </Link>

                </div>
                {/* <Link to ={ROUTES.MYSHOPPINGHISTORY}>
                    <div className="SB1-e">
                        <p className="userb1">Mis pedidos</p>
                    </div>
                </Link> */}
            </div>
        )
    }
}

export default withFirebase(ItemsSeller);
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
            user_email: '',
            admin: true,
        };
    }
    componentDidMount(){
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser =>{
            authUser
            ? this.setState({ authUser, username: authUser.displayName, user_email: authUser.email })
            : this.setState({ authUser:null });
            console.log(this.state.user_email)
            console.log(this.state.admin)
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
        this.listener3 = this.props.firebase.auth.onAuthStateChanged(authUser2 =>{
            if(authUser2){
                if(authUser2.email !== 'davidfarinango24.1995@gmail.com'){
                    return this.setState({admin: false})
                }else{
                    return this.setState({admin: true});
                }
            }
        })
    }
    componentWillUnmount(){
        this.listener();
        this.listener2();
        this.listener3();
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
                    <Link to ={ROUTES.MYPURCHASE}>
                        {/* <div className="ItemSellerBox2" > */}
                            <p>Mis compras</p>
                        {/* </div> */}
                    </Link>
                    <Link to ={ROUTES.MYPRODUCTS}>
                        {
                            this.state.admin ?<p >Mis productos</p>: null
                        }
                    </Link>
                    <Link to ={ROUTES.MYSHOPCART}>
                        {
                            this.state.admin ?<p >Mis ventas</p>: null
                        }
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
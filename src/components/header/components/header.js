import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import './header.css';
import { withFirebase } from '../../../Firebase'
import Navigation from '../../Navigation'


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            authUser: null,
            image: "./images/users/usuario.png",
        };
    }
    componentDidMount(){
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser =>{
            authUser
            ? this.setState({ authUser })
            : this.setState({ authUser:null });
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
            <div className="container-fluid navbar-expand-lg navbar-light bg-light">
                <div className="row no-gutters h-principal-box" id="Header">
                    <div className="header1 pb1">
                        <Link to= ''>
                            <img src = "./images/weygo/logo.PNG" alt="logo" />
                        </Link>
                        <a className="navbar-brand" href="#">Weygo</a>
                    </div>
                    <div className="header2 pb2">
                        <form className="form-inline my-2 my-lg-0 justify-content-center">
                            <a className="mr-10">Todas las categorias:</a>
                            <input className="form-control mr-sm-8" type="search" placeholder="Busqueda a todos los productos" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                    <div className="header3 pb3">
                        <Navigation authUser={this.state.authUser} />
                        <img className="img_avatar"src ={this.state.image} id='avatar' alt="carro compras" height="35px" weight="35px" />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default withFirebase(Header);

import React,{Component} from 'react';
// import './generallogin.css'
import {Link} from 'react-router-dom';
import HeaderContainer from '../../header/container/headercontainer';
import Footer from '../../footer/container/footer-container';
import './sc.css'
class ShoppingCart extends Component{
    render(){
        return(
            <div className="ShopCart">
                <HeaderContainer />
                <div className = "shopCartimg">
                    <img src= "./images/others/carrito3.png" height="66px"></img>
                    <h1>Carrito</h1>
                </div>
                <div className="shopCartM">
                    <h2>Ingresa a tu cuenta y registrate para empezar a comprar</h2> 
                </div>
                <div className="LIbotons">
                    <h4>Realiza tus compras en:</h4>
                    <Link to=''>
                        <button className="btn btn-success">Weygo</button>
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }
}
export default ShoppingCart;
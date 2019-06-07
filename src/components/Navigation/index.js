import React from 'react';
import {Link} from 'react-router-dom';

import './navigation.css'
import * as ROUTES from '../constants/routes';
import SignOutButton from '../logIn/SignOut';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth />:<NavigationNonAuth /> }</div>
)

const NavigationAuth =()=>(
  
  <div className="nav">
    <div className="nav1">
      <Link 
      // to =''
      to ={ROUTES.SHOPPINGCARTLOGGED}
      >
        <p className="navbar-brand">Mi carrito</p>
      </Link>
      <img src ="/images/others/carrito.PNG" alt="carro compras" height="40px" />
    </div>
    <div className="nav_user">
      <Link 
      to={ROUTES.MYACCOUNT}
      // to={ROUTES.ACCOUNT}
      >
        <p className="navbar-brand">
          Mi cuenta
        </p>
      </Link>
      <SignOutButton />
    </div>
  </div>
);

const NavigationNonAuth = () =>(
    <div className="nav">
      <div className="nav1">
        <Link 
        // to =''
        to ={ROUTES.SHOPPINGCART}
        >
          <p className="navbar-brand">Mi carrito</p>
        </Link>
        <img src ="/images/others/carrito.PNG" alt="carro compras" height="40px"/>
      </div>
      <div className="nav2">
        <Link  to={ROUTES.SIGN_IN}>
          <p className="navbar-brand">Ingresa o registrate</p>
        </Link>
      </div>
    </div>
)


export default Navigation;
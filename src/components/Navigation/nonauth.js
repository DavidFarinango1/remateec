import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
// import SignOutButton from '../logIn/SignOut';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import { bindActionCreators } from 'redux';

class NavigationNonAuth extends Component{
    totalProducts(cartArray){
        return cartArray.reduce((acum, item)=>{
            acum += item.units;
            return acum;
        }, 0);
    }
    render(){
      return(
        <div className="nav">
          <div className="nav1">
            <Link 
            // to =''
            to ={ROUTES.SHOPPINGCART}
            >
              <p className="navbar-brand">Mi carrito</p>
            </Link>
            <div className="Navnonauthcontainer">
                <img className="Navnonauthimg" src ="/images/others/carrito3.PNG" alt="carro compras" height="40px"/>
                <p className="Navnonauthp badge badge-pill badge-light">{this.totalProducts(this.props.addToCart)}</p>
            </div>
          </div>
          <div className="nav2">
            <Link  to={ROUTES.SIGN_IN}>
              <p className="navbar-brand">Ingresa o registrate</p>
            </Link>
          </div>
        </div>
  
      )
    }
  }
  function mapStateToProps(state, props) {
    return {
        addToCart: state.get('addToCart')
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch)
    }
  }
  
  export default connect(mapStateToProps
    ,mapDispatchToProps
    )(NavigationNonAuth)
// export default NavigationNonAuth;
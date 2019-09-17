import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../constants/routes';

class NavigationNonAuth2 extends Component{
  toRoute=()=>{
    this.props.history.push(ROUTES.SHOPPINGCART)
  }
  toSignIn=()=>{
    this.props.history.push(ROUTES.SIGN_IN)
  }
    render(){
        return(
          <div>
            <button onClick={this.toRoute} className='btn btn-outline-success'>Finalizar compra</button>
            <p style={{marginTop: '1em'}} className='SignIn_problems' >Para una mejor experiencia no olvides <a className="SignHover" onClick={this.toSignIn}>ingresar a tu cuenta</a> primero antes de empezar a comprar</p>
            <span className="iconHeart">♥</span>
          </div>
      )
    }
  }

export default withRouter(NavigationNonAuth2)
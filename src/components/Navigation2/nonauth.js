import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../constants/routes';

class NavigationNonAuth2 extends Component{
  toRoute=()=>{
    this.props.history.push(ROUTES.SHOPPINGCART)
  }
    render(){
        return(
          <div>
            <button onClick={this.toRoute} className='btn btn-outline-success'>Finalizar compra</button>
          </div>
      )
    }
  }

export default withRouter(NavigationNonAuth2)
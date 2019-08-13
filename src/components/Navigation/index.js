import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import { bindActionCreators } from 'redux';

import './navigation.css'
import * as ROUTES from '../constants/routes';
import SignOutButton from '../logIn/SignOut';
import NavigationAuth from './auth';
import NavigationNonAuth from './nonauth';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth />:<NavigationNonAuth /> }</div>
  )
      // totalProducts(cartArray){
      //   return cartArray.reduce((acum, item)=>{
      //       acum += item.units;
      //       return acum;
      //   }, 0);
      // }
// const NavigationAuth =()=>(
// const NavigationAuth =()=>(
// class NavigationAuth extends Component{
//   render(){
//       return(
//         <div className="nav">
//           <div className="nav1">
//             <Link 
//             // to =''
//             to ={ROUTES.SHOPPINGCARTLOGGED}
//             >
//               <p className="navbar-brand">Mi carrito</p>
//             </Link>
//             <img src ="/images/others/carrito3.PNG" alt="carro compras" height="40px" />
//             {/* <p>{this.totalProducts(this.props.addToCart)}</p> */}
//           </div>
//           <div className="nav_user">
//             <Link 
//             to={ROUTES.MYACCOUNT}
//             // to={ROUTES.ACCOUNT}
//             >
//               <p className="navbar-brand">
//                 Mi cuenta
//               </p>
//             </Link>
//             <SignOutButton />
//           </div>
//         </div>
//     )
//   }
// }
// );

// const NavigationNonAuth = () =>(

// class NavigationNonAuth extends Component{
//   render(){
//     return(
//       <div className="nav">
//         <div className="nav1">
//           <Link 
//           // to =''
//           to ={ROUTES.SHOPPINGCART}
//           >
//             <p className="navbar-brand">Mi carrito</p>
//           </Link>
//           <img src ="/images/others/carrito3.PNG" alt="carro compras" height="40px"/>
//           {/* <p>{this.totalProducts(this.props.addToCart)}</p> */}
//         </div>
//         <div className="nav2">
//           <Link  to={ROUTES.SIGN_IN}>
//             <p className="navbar-brand">Ingresa o registrate</p>
//           </Link>
//         </div>
//       </div>

//     )
//   }
// }
// )

// function mapStateToProps(state, props) {
//   return {
//       addToCart: state.get('addToCart')
//   }
// }

// function mapDispatchToProps(dispatch){
//   return{
//       actions: bindActionCreators(actions, dispatch)
//   }
// }

// export default connect(mapStateToProps
//   ,mapDispatchToProps
//   )(Navigation)
export default Navigation;
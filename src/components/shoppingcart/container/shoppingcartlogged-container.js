// import React,{Component} from 'react';
// import ShoppingCartLogged from '../components/shoppingcartlogged.js';
// import CartContainer from '../../Cart/cart_container'
// import HeaderContainer from '../../header/container/headercontainer';
// import Footer from '../../footer/container/footer-container';

// import { connect } from 'react-redux'
// import * as actions from '../../../store/actions/index.js'
// import { bindActionCreators } from 'redux'

// import './scl.css'
// class ShoppingCartLoggedContainer extends Component{
//     openModal = (id) =>{
//         this.props.actions.openModal(id)
//     }
//     handleDeductUnit(id) {
//         let units = -1;
//         this.props.actions.updateItemUnits({id, units})
//     }
//     handleAddUnit(id) {
//         let units = 1;
//         this.props.actions.updateItemUnits({id, units})
//     }
//     handleDeleteFromCart(id){
//         this.props.actions.deleteFromCart({id})
//     }
//     totalAmount(cartArray) {
//         return cartArray.reduce((acum, item) => {
//             acum += item.price * item.units;
//             return acum;
//         }, 0);
//     }
//     totalProducts(cartArray){
//         return cartArray.reduce((acum, item)=>{
//             acum += item.units;
//             return acum;
//         }, 0);
//     }
//     onSellClick=()=>{
//         console.log(this.props.addToCart)
//     }

//     render(){
//         return(
//             <div>
//                 <HeaderContainer />
//                 <div className="SCLimageccontainer">
//                     <img className="SCLimage" src = "./images/weygo/weygo-gracias-por-la-compra.png" alt="gracias por su compra" />
//                 </div>
//                 <div className="SCL-principalbox">
//                     <div className="SCL-box1">
//                         <div className="SCL-box-x">
//                             <div className="SCL-a">
//                                 <p className="SCL-a-w" onClick={this.onSellClick}>Carrito</p>    
//                             </div>
//                             <div className="SCL-b">
//                                 <p className="SCL-b-w">Precio Unitario</p>
//                             </div>
//                             <div className="SCL-c">
//                                 <p className="SCL-c-w">Cantidad</p>
//                             </div>
//                             <div className="SCL-d">
//                                 <p className="SCL-d-w">Precio Total</p>
//                             </div>
//                         </div>
//                         <div className="SCL-box-y">
//                             {
//                                 this.props.addToCart.map((cartItem)=>{
//                                     return(
//                                         <ShoppingCartLogged 
//                                         openModal={this.openModal}
//                                         key={cartItem.id}
//                                         {...cartItem}
//                                         onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
//                                         onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
//                                         handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)}
//                                         />
//                                     )
//                                 })
//                             }
//                         </div>
//                         <div className="SCL-box-z">
//                             <p className="SCL-box-za">Subtotal ({this.totalProducts(this.props.addToCart)} productos):         ${this.totalAmount(this.props.addToCart)}</p>
//                         </div> 
//                     </div>
                    
//                     <div className="SCL-box2">                
//                         <h4>Subtotal de productos ({this.totalProducts(this.props.addToCart)} productos)</h4>
//                         <h4>Total a pagar: ${this.totalAmount(this.props.addToCart)}</h4>
//                         <button>Proceder al pago</button>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         )
//     }
// }

// function mapStateToProps(state, props){
//     return{
//         addToCart: state.get('addToCart')
//     }
// }
// function mapDispatchToProps(dispatch){
//     return{
//         actions: bindActionCreators(actions, dispatch)
//     }
// }

// export default connect(mapStateToProps
//     ,mapDispatchToProps
//     )(ShoppingCartLoggedContainer)

import React,{Component} from 'react';
import ShoppingCartLogged from '../components/shoppingcartlogged.js';
import CartContainer from '../../Cart/cart_container'
import HeaderContainer from '../../header/container/headercontainer';
import Footer from '../../footer/container/footer-container';

import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index.js'
import { bindActionCreators } from 'redux'

import './scl.css'
class ShoppingCartLoggedContainer extends Component{
    // openModal = (id) =>{
    //     this.props.actions.openModal(id)
    // }
    handleDeductUnit(id) {
        let units = -1;
        this.props.actions.updateItemUnits({id, units})
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.actions.updateItemUnits({id, units})
    }
    handleDeleteFromCart(id){
        this.props.actions.deleteFromCart({id})
    }
    totalAmount(cartArray) {
        return cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        }, 0);
    }
    totalProducts(cartArray){
        return cartArray.reduce((acum, item)=>{
            acum += item.units;
            return acum;
        }, 0);
    }
    onSellClick=()=>{
        console.log(this.props.addToCart)
    }

    render(){
        return(
            <div>
                <HeaderContainer />
                <div className="SCLimageccontainer">
                    <img className="SCLimage" src = "./images/weygo/weygo-gracias-por-la-compra.png" alt="gracias por su compra" />
                </div>
                <div className="SCL-principalbox">
                    <div className="SCL-box1">
                        <div className="SCL-box-x">
                            <div className="SCL-a">
                                <p className="SCL-a-w" onClick={this.onSellClick}>Carrito</p>    
                            </div>
                            <div className="SCL-b">
                                <p className="SCL-b-w">Precio Unitario</p>
                            </div>
                            <div className="SCL-c">
                                <p className="SCL-c-w">Cantidad</p>
                            </div>
                            <div className="SCL-d">
                                <p className="SCL-d-w">Precio Total</p>
                            </div>
                        </div>
                        <div className="SCL-box-y">
                            {
                                this.props.addToCart.map((cartItem)=>{
                                    return(
                                        <ShoppingCartLogged 
                                        // openModal={this.openModal}
                                        key={cartItem.id}
                                        {...cartItem}
                                        onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                                        onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
                                        handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="SCL-box-z">
                            <p className="SCL-box-za">Subtotal ({this.totalProducts(this.props.addToCart)} productos):         ${this.totalAmount(this.props.addToCart)}</p>
                        </div> 
                    </div>
                    <div className="SCL-box2">                
                        <h4>Subtotal de productos ({this.totalProducts(this.props.addToCart)} productos)</h4>
                        <h4>Total a pagar: ${this.totalAmount(this.props.addToCart)}</h4>
                        <button>Proceder al pago</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state, props){
    return{
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
    )(ShoppingCartLoggedContainer)
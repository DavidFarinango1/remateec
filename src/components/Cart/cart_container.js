import React, {Component} from 'react';
import Cart from './index.js';

import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import { bindActionCreators } from 'redux';


class CartContainer extends Component {
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
        render(){
            return(
                <div>
                    <div className ="Cart">
                        <h1 className="Cart_title">Carrito de compras</h1>
                        <p className="Cart_title2">({this.totalProducts(this.props.addToCart)} productos)</p>
                        {
                            this.props.addToCart.map((cartItem)=>{
                                return(
                                    <Cart 
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
                        <h1 className="Cart_title3">Total a pagar: ${this.totalAmount(this.props.addToCart)}</h1>
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
    )(CartContainer)

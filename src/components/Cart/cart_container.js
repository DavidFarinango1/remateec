import React, {Component} from 'react';
import Cart from './index.js';

import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import { bindActionCreators } from 'redux';
import { withFirebase } from '../../Firebase';
import { compose } from 'recompose'
import Navigation2 from '../Navigation2'

class CartContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            authUser: null,
            products: false,
        }
    }
    componentDidMount(){
        this.listener15 = this.props.firebase.auth.onAuthStateChanged(authUser=>{
            authUser
            ? this.setState({ authUser })
            : this.setState({ authUser:null });
        })
    }
    handleDeductUnit(id) {
        let units = -1;
        this.props.actions.updateItemUnits({id, units})
        this.setState({products: false})
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.actions.updateItemUnits({id, units})
        this.setState({products: true})
    }
    handleDeleteFromCart(id){
        this.props.actions.deleteFromCart({id})
        this.setState({products: false})
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
                        <h1 className="Cart_title3">Total a pagar: ${Number(this.totalAmount(this.props.addToCart).toFixed(2))}</h1>
                        <Navigation2 authUser={this.state.authUser} />
                        {/* {
                            this.props.products  ? 
                            :
                            <p></p>
                        } */}
                        {/* <Navigation2 authUser={this.state.authUser} /> */}
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

export default compose(
    withFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps
    ))(CartContainer)

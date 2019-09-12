import React,{Component} from 'react';
import ShoppingCartLogged from '../components/shoppingcartlogged.js';
import CartContainer from '../../Cart/cart_container'
import HeaderContainer from '../../header/container/headercontainer';
import Footer from '../../footer/container/footer-container';
import PayBox from '../components/paybox'
import Cash from '../components/cash'

import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as actions from '../../../store/actions/index.js'
import { bindActionCreators } from 'redux'
import { withFirebase } from '../../../Firebase'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import './scl.css'
class ShoppingCartLoggedContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            sellOnLine: this.props.addToCart,
            edit2: false,
            user: [],
            authUser: null,
            name: '',
            email: '',
            mybussinessname: '',
            mycell: '',
            mygps: '',
            edit3: false,
            totalAmount: this.totalAmount(this.props.addToCart)
        }

    }
    componentDidMount(){
        this.listener9 = this.props.firebase.auth.onAuthStateChanged(authUser =>{
            authUser
            ? this.setState({ 
                            authUser, 
                            name: authUser.displayName,  
                            email: authUser.email, 
                           })
            : this.setState({ authUser:null});
        })
        this.listener10 = this.props.firebase.auth.onAuthStateChanged((authUser)=>{
            authUser
            ?
            this.props.firebase
                .dothisdb()
                .collection('users')
                .where('u_email', '==', authUser.email)
                .onSnapshot( snapShot=>{
                    let result = snapShot.docChanges()
                        this.setState({
                            mycell: result.map((user)=>{
                                    return user.doc.data().u_cell
                                }).toString()
                            ,
                            mygps: result.map((user)=>{
                                    return user.doc.data().u_gps
                                }).toString()
                            ,
                            mybussinessname: result.map((user)=>{
                                return user.doc.data().u_mybussinessname
                            }).toString()
                        })
                },error=>{
                    console.log(error)
                })
            :
            console.log('error')
        })
        this.listener8 = this.props.firebase.auth.onAuthStateChanged((authUser)=>{
            authUser
            ?
            this.props.firebase
                .dothisdb()
                .collection('users')
                .where('u_email', '==', authUser.email)
                .onSnapshot((snapShot)=>{
                    let userResult = snapShot.docChanges()
                        this.setState({
                            user: userResult.map((user)=>{
                                return user.doc.data()
                            }),
                        })
                    
                },error=>{
                    console.log(error)
                })
            :
            console.log('error al consultar el usuario')
        })
    }
    componentWillUnmount(){
        this.listener9();
        this.listener8();
    }
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
        console.log(this.state.user) 
    }
    readyToPay= event =>{
        const {
            sellOnLine,
            user,
            email,
            totalAmount,
        }= this.state;
        event.preventDefault();
            this.props.firebase
                .dothisdb()
                .collection('shop')
                .add({
                    u_email: email,
                    s_prod: sellOnLine,
                    order_by: user, 
                    order_at: new Date(),
                    total_order: totalAmount,
                })
                .then(()=>{
                    this.setState({
                        s_prod: ''
                    })
                    alert('gracias por tu compra')
                    this.props.history.push(ROUTES.MYPURCHASE)
                })
                .catch((error)=>{
                    console.log(error)
                })
    }
    readyToReturn= event=>{
        event.preventDefault();
            this.setState({
                edit2: false,
            })
    }
    onNext=(event)=>{
        const {
            name,
            email,
            mybussinessname,
            mycell,
            mygps,
            edit3,
        }= this.state
        event.preventDefault()
        const user = this.props.firebase.auth.currentUser
        const id = user.uid
        !edit3?
        this.props.firebase
            .dothisdb()
            .collection('users')
            .doc(id)
            .set({
                u_name: name,
                u_email: email,
                u_mybussinessname: mybussinessname,
                u_cell: mycell,
                u_gps: mygps,
            })
            .then(()=>{
                this.setState({
                    edit2: true,
                    edit3: true,
                })
            })
            .catch((error)=>{
                alert(error)
            })
            :this.update3();
    }
    update3=()=>{
        const {
            mybussinessname,
            mycell,
            mygps,
        }= this.state;
        const id = this.props.firebase.auth.currentUser.uid
        this.props.firebase
            .dothisdb()
            .collection('users')
            .doc(id)
            .update({
                u_cell: mycell,
                u_gps: mygps,
                u_mybussinessname: mybussinessname,
            })
            .then(()=>{
                this.setState({
                    edit2: true,
                    edit3: true,
                })
            })
            .catch((error)=>{
                alert('el error es :'+ error)
            })
    }

    onPrevius=(event)=>{
        event.preventDefault();
        this.setState({
            edit2: false,
        })
    }
    onChange2=event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <div>
                <HeaderContainer />
                <div className="SCLimageccontainer">
                    <img className="SCLimage" src = "./images/weygo/weygo-gracias-por-la-compra.png" alt="gracias por su compra" />
                </div>
                <div id="blockContainer" className="SCL-principalbox">
                    <div id="blockA" className="SCL-box1">
                        <div className="SCL-box-x">
                            <div className="SCL-a">
                                <p className="SCL-a-w" onClick={this.onSellClick}>Carrito</p>    
                            </div>
                            <div className="SCL-b">
                                <p className="SCL-b-w" onClick={this.sell2}>Precio Unitario</p>
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
                            <p className="SCL-box-za">Subtotal ({this.totalProducts(this.props.addToCart)} productos):         ${Number(this.totalAmount(this.props.addToCart).toFixed(2))}</p>
                        </div> 
                    </div>
                    <div id="blockB" className="SCL-box2">
                        <form onSubmit={this.onNext}>
                            <div>
                                {
                                    this.state.edit2 ? 
                                    <Cash buyReturn={this.readyToReturn} buyProp={this.readyToPay} /> 
                                    : 
                                    <PayBox 
                                    dataOrder={this.state}
                                    onActionChange2={this.onChange2}
                                    onTotalProducts={this.totalProducts(this.props.addToCart)}
                                    onTotalAmount={this.totalAmount(this.props.addToCart)}
                                    />
                                }
                            </div>
                        </form>
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

export default compose(
    withRouter,
    withFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(ShoppingCartLoggedContainer)
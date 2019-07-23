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
                    // })
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
        // console.log(this.state.user)
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
            user
        }= this.state;
        event.preventDefault();
        // const user = this.props.firebase.auth.currentUser
        // console.log(user)
            this.props.firebase
                .dothisdb()
                .collection('shop')
                .add({
                    s_prod: sellOnLine,
                    order_by: user, 
                    order_at: new Date(),
                })
                .then(()=>{
                    this.setState({
                        s_prod: ''
                    })
                    alert('gracias por tu compra')
                    // console.log('gracias por tu compra')

                })
                .catch((error)=>{
                    console.log(error)
                })
        console.log(this.state.sellOnLine) 
        console.log(this.state.user) 
    }
    readyToReturn= event=>{
        event.preventDefault();
            this.setState({
                edit2: false,
            })
    }
    onNext=(event)=>{
        event.preventDefault();
            this.setState({
                edit2: true,
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
                <div className="SCL-principalbox">
                    <div className="SCL-box1">
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
                            <p className="SCL-box-za">Subtotal ({this.totalProducts(this.props.addToCart)} productos):         ${this.totalAmount(this.props.addToCart)}</p>
                        </div> 
                    </div>
                    <div className="SCL-box2">
                        <h2>Elige tu método de pago</h2>
                        <h5>Subtotal de productos ({this.totalProducts(this.props.addToCart)} productos)</h5>
                        <h5>Total a pagar: ${this.totalAmount(this.props.addToCart)}</h5>
                        <form onSubmit={this.onNext}>
                            <div>
                                {
                                    this.state.edit2 ? 
                                    <Cash buyReturn={this.readyToReturn} buyProp={this.readyToPay} /> 
                                    : 
                                    <PayBox 
                                    dataOrder={this.state}
                                    onActionChange2={this.onChange2}
                                    />
                                }
                            </div>
                        {/* <button type="submit">Siguiente</button> */}
                        {/* <button onClick={this.onPrevius}>Atras</button> */}

                        </form>
                        {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <p>holi</p>
                                </div>
                                <div class="carousel-item">
                                    <p>holi2</p>
                                </div>
                                <div class="carousel-item">
                                    <p>holi3</p>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>     */}
                    
                        {/* <h2>Elige tu método de pago</h2>
                        

                        <h4>Subtotal de productos ({this.totalProducts(this.props.addToCart)} productos)</h4>
                        <h4>Total a pagar: ${this.totalAmount(this.props.addToCart)}</h4>
                        <button onClick={this.readyToPay}>Proceder al pago</button> */}
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
    withFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(ShoppingCartLoggedContainer)
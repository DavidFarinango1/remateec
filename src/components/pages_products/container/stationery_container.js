import React, {Component} from 'react'
import Header from '../../header/container/headercontainer'
import Slides from '../../slides/components/slides'
import CartContainer from '../../Cart/cart_container'
import Stationery from '../components/stationery'
import Footer from '../../footer/container/footer-container'
import './stationery.css'

import { withFirebase } from '../../../Firebase'
import * as actions from '../../../store/actions/index'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #444;
    color: white;
    padding: 10px;
    position: fixed;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 99999;
    transition: top 0.5s ease;
    height: 100 vh;
`;
class StationeryContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            stationery_prods:[],
            data: '',
            top: -100,
            id: '',

        }
    }
    componentDidMount(){
        this.listener7 =     
        this.props.firebase
            .dothisdb()
            .collection('products')
            // .orderBy('date', 'desc')
            .where('p_categories' , '==', 'Papeleria')
            .onSnapshot((snapShots)=>{
                this.setState({
                    stationery_prods: snapShots.docs.map((doc)=>{
                        return { id: doc.id, data: doc.data()}
                    })
                })
            },error=>{
                console.log(error)
            })
    }
    openModal=(prod)=>{
        this.setState({
            data: prod.data,
        })
    }
    dispachAddToCart=(product)=> {
        this.props.actions.addToCart(product);
        console.log(product)
        this.showNotification();
        this.setState({productsState: true})
    }
    showNotification=()=>{
        this.setState({
            top: 16,
        },()=>{
            setTimeout(()=>{
                this.setState({
                    top:-100,
                })
            },1000)
        });
    }

    render(){
        return(        
            <div>
                <Container top={this.state.top}> Agregado al carrito <i className="fa fa-bell"></i></Container>
                <Header />
                <Slides />
                <div className="StationeryPbox">
                    <div className="StationeryPbox1">
                        <Stationery 
                        products2={this.state.stationery_prods}
                        handleOnAdd={this.dispachAddToCart}
                        openModal2={this.openModal}
                        data_modal={this.state.data}
                        />   
                    </div>
                    <div className="StationeryPbox2">
                        <CartContainer />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps=(state, props)=>( {
    count: state.get('count'),
})
const mapDispatchToProps=(dispatch)=>({
      actions: bindActionCreators(actions, dispatch)
})
export default compose(
    withFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(StationeryContainer);
// export default StationeryContainer;
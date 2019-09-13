import React, {Component} from 'react'
import Header from '../../header/container/headercontainer'
import Slides from '../../slides/components/slides'
import CartContainer from '../../Cart/cart_container'
import Tech from '../components/tech'
import Footer from '../../footer/container/footer-container'

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

class TechContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            tech_prods:[],
            data: '',
            top: -100,
            id: '',

        }
    }
    componentDidMount(){
        this.listener8 =     
        this.props.firebase
            .dothisdb()
            .collection('products')
            // .orderBy('date', 'desc')
            .where('p_categories' , '==', 'Tecnologia')
            // .limit(3)
            .onSnapshot((snapShots)=>{
                this.setState({
                    tech_prods: snapShots.docs.map((doc)=>{
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
                        <Tech 
                            products2={this.state.tech_prods}
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
)(TechContainer);
// export default TechContainer;
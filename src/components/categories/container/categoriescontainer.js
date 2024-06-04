import React, { Component } from 'react'
import { withFirebase } from '../../../Firebase'
import * as actions from '../../../store/actions/index'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Rec_added_prods from '../components/rec_added_prods';
import StationeryProds from '../components/stationery_prods';
import TechProds from '../components/tech_prods';
import OthersProds from '../components/others_prods';
import ChairsProds from '../components/chairs_prods';
import './categoriescontainer.css'
import CartContainer from '../../Cart/cart_container'
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
class CategoriesContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            recently_added_prods:[],
            stationery_prods:[],
            tech_prods:[],
            others_prods:[],
            chairs_products: [],
            inputValue_name: '',
            inputValue_categories: '',
            inputValue_price: '',
            inputValue_offerprice: '',
            inputValue_shortdetails: '',
            title_general_description1: '',
            details_general_description1: '',
            title_general_description2: '',
            details_general_description2: '',
            title_general_description3: '',
            details_general_description3: '',
            myubication: '',
            logistic_seller: '',
            edit: false,
            id: '',
            authUser: null,
            uploadValue0: 0,
            picture0: null,
            uploadValue2: 0,
            picture2: null,
            uploadValue3: 0,
            picture3: null,
            data: '',
            top: -100,
            productsState: false,
        };
    }
    componentDidMount(){
        this.listener6 =     
            this.props.firebase
                .dothisdb()
                .collection('products')
                .orderBy('date', 'desc')
                // .limit(3)
                .onSnapshot((snapShots)=>{
                    this.setState({
                        recently_added_prods: snapShots.docs.map((doc)=>{
                            return { id: doc.id, data: doc.data()}
                        })
                    })
                },error=>{
                    console.log(error)
                })
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
        this.listener9 =     
            this.props.firebase
                .dothisdb()
                .collection('products')
                // .orderBy('date', 'desc')
                .where('p_categories' , '==', 'Otros')
                // .limit(3)
                .onSnapshot((snapShots)=>{
                    this.setState({
                        others_prods: snapShots.docs.map((doc)=>{
                            return { id: doc.id, data: doc.data()}
                        })
                    })
                },error=>{
                    console.log(error)
                })
        this.listener10 =     
            this.props.firebase
                .dothisdb()
                .collection('products')
                // .orderBy('date', 'desc')
                .where('p_categories' , '==', 'Sillas')
                // .limit(3)
                .onSnapshot((snapShots)=>{
                    this.setState({
                        chairs_products: snapShots.docs.map((doc)=>{
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
            id: prod,
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
            <div className="CateCont">
                <Container top={this.state.top}> Agregado al carrito <i className="fa fa-bell"></i></Container>
                <div className="CateCont2">
                    <div className="CateCont2_1">
                        <Rec_added_prods 
                        products2={this.state.recently_added_prods}
                        handleOnAdd={this.dispachAddToCart}
                        openModal2={this.openModal}
                        data_modal={this.state.data}
                        idData={this.state.id}
                        />
                    </div>
                    <div className="CateCont2_1">
                        <ChairsProds 
                        products2={this.state.chairs_products}
                        handleOnAdd={this.dispachAddToCart}
                        openModal2={this.openModal}
                        data_modal={this.state.data}
                        />
                    </div>
                    <div className="CateCont2_1">
                        <TechProds 
                        products2={this.state.tech_prods}
                        handleOnAdd={this.dispachAddToCart}
                        openModal2={this.openModal}
                        data_modal={this.state.data}
                        />
                    </div>
                    <div className="CateCont2_1">
                        <OthersProds 
                        products2={this.state.others_prods}
                        handleOnAdd={this.dispachAddToCart}
                        openModal2={this.openModal}
                        data_modal={this.state.data}
                        />
                    </div>
                    <div className="CateCont2_1">
                        <StationeryProds 
                        products2={this.state.stationery_prods}
                        handleOnAdd={this.dispachAddToCart}
                        openModal2={this.openModal}
                        data_modal={this.state.data}
                        />
                    </div>
                    
                </div>
                    {/* <div className="CateCont3">
                        <CartContainer products={this.state.productsState} />
                    </div> */}
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
)(CategoriesContainer);
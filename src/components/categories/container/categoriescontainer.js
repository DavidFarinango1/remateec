import React, { Component } from 'react'
import { withFirebase } from '../../../Firebase'
import * as actions from '../../../store/actions/index'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import OneDescriptionModal from '../components/oneDescriptionModal'
import Rec_added_prods from '../components/rec_added_prods';
import StationeryProds from '../components/stationery_prods';
import TechProds from '../components/tech_prods';
import OthersProds from '../components/others_prods';
import './categoriescontainer.css'
import CartContainer from '../../Cart/cart_container'

class CategoriesContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            recently_added_prods:[],
            stationery_prods:[],
            tech_prods:[],
            others_prods:[],
            inputValue_name: '',
            inputValue_categories: '',
            inputValue_price: '',
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
                // .limit(3)
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
    }
    openModal=(prod)=>{
        this.setState({
            data: prod.data,
        })
    }
    dispachAddToCart=(product)=> {
        this.props.actions.addToCart(product);
        console.log(product)
    }
    render(){
        return(
            <div className="CateCont">
                <div className="CateCont2">
                    <div className="CateCont2_1">
                        <Rec_added_prods 
                        products2={this.state.recently_added_prods}
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
                </div>
                    <div className="CateCont3">
                        <CartContainer />
                    </div>
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
import React, { Component } from 'react'
import { withFirebase } from '../../../Firebase'
import * as actions from '../../../store/actions/index'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { connect } from 'react-redux'
// import Header from '../../header/container/headercontainer'
import OneDescription from './oneprod/onedescription';
import MoreDescription from './oneprod/moredescription';

class Description extends Component {
    constructor(props){
        super(props);
        this.state ={
            data: [],
            id: '',
        }
    }
    componentDidMount(){
        const id = this.props.id
        this.listener5 = this.props.firebase.dothisdb().collection('products').doc(id).get()
            .then((doc)=>{
                console.log('documento tomado')
                if(doc.exists){
                    this.setState({
                        data: doc.data(),
                        id: doc.id,
                    })
                }else{
                    console.log('el documento no existe')    
                }
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    addUnit=(product)=>{
        this.props.actions.addToCart(product);
    }   
    handleClikc=event=>{
        console.log(this.props.id)
    }
    render(){
        return(
            <div>
                <OneDescription 
                proddetails={this.state} 
                handleOnAddUnit={this.addUnit}
                />
                <MoreDescription proddetails={this.state} />
                {/* <Header /> */}
                {/* <h1 onClick={this.handleClikc}>prueba prueba</h1>
                <p>Nombre:</p>
                <p>{this.state.p_name}</p>
                <p>Correo:</p>
                <p>{this.state.p_categories}</p> */}
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    actions: bindActionCreators(actions, dispatch)
})
export default compose(
    withFirebase,
    connect(
        null,
        mapDispatchToProps,
    ),
)(Description)
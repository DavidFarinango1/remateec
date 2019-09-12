import React, { Component } from 'react'
import { withFirebase } from '../../../Firebase'
import * as actions from '../../../store/actions/index'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import OneDescription from './oneprod/onedescription';
import MoreDescription from './oneprod/moredescription';
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
class Description extends Component {
    constructor(props){
        super(props);
        this.state ={
            data: [],
            id: '',
            top: -100,
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
        this.showNotification();
    }   
    handleClikc=event=>{
        console.log(this.props.id)
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
                <OneDescription 
                proddetails={this.state} 
                handleOnAddUnit={this.addUnit}
                />
                <MoreDescription proddetails={this.state} />
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
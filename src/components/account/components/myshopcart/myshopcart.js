import React, { Component } from 'react'
import Order from './order'
import { withFirebase } from '../../../../Firebase'
import './myshopcart.css'

class MyShopCart extends Component{
    constructor(props){
        super(props);
        this.state={
            order:[]
        }
    }
    componentDidMount(){
        this.listener7 = this.props.firebase
            .dothisdb()
            .collection('shop')
            .orderBy('order_at', 'desc')
            .onSnapshot((snapShot)=>{
                this.setState({
                    order: snapShot.docs.map((doc)=>{
                        return {id: doc.id, data: doc.data()}
                    })
                })
            },error=>{
                console.log(error)
            })
    }
    componentWillUnmount(){
        this.listener7();
    }
    onLog=()=>{
        console.log(this.state.order)
    }

    render(){
        return(
            <div className='MyaccountBOX'>
                <h2 onClick={this.onLog}>Ventas</h2>
                <Order order={this.state.order} />
            </div>
        )
    }
}
export default withFirebase(MyShopCart);
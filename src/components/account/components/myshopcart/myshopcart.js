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
                {
                    this.state.order && this.state.order !== undefined ? this.state.order.map((item, key)=>(
                        <div key={key}>{item.data.s_prod.map((item2)=>(
                            <div>{item2.name}</div>
                        ))}</div>
                    )):null
                }
                <Order />
            </div>
        )
    }
}
export default withFirebase(MyShopCart);
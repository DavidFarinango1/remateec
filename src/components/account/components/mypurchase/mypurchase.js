import React, { Component } from 'react'
import MyPurchaseOrder from './mypurchaseorder'
import { withFirebase } from '../../../../Firebase'
import './mypurchase.css'

class MyPurchase extends Component {
    constructor(props){
        super(props);
        this.state={
            authUser: null,
            email: '',
            order2:[],
        }
    }
    componentDidMount(){
        this.listener11 = this.props.firebase.auth.onAuthStateChanged(authUser=>{
            authUser
            ? this.setState({
                authUser,
                email: authUser.email,
            })
            
            : this.setState({
                authUser: null
            })
        })
        this.listener12 = this.props.firebase.auth.onAuthStateChanged((authUser)=>{
            authUser
            ?
            this.props.firebase
                .dothisdb()
                .collection('shop')
                // .orderBy('order_at', 'desc')
                .where(`u_email`, '==', authUser.email)
                .onSnapshot((snapShot)=>{
                    this.setState({
                        order2: snapShot.docs.map((doc)=>{
                            return {id: doc.id, data: doc.data()}
                        })
                    })
                },error=>{
                    console.log(error)
                })
            :
            console.log('error')
        })
        
    }
    componentWillUnmount(){
        this.listener11();
    }
    onPedidos=()=>{
        console.log(this.state.order2)
        console.log(this.state.authUser)
        console.log(this.state.email)
    }
    render(){
        return(
            <div className='MyaccountBOX'>
                <h2 onClick={this.onPedidos}>Historial de pedidos</h2>
                <MyPurchaseOrder order2={this.state.order2} />
            </div>
        )
    }
}
export default withFirebase(MyPurchase);
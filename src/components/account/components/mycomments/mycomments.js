import React, { Component } from 'react'
import Eachcomment from './eachcomment.js'
import { withFirebase } from '../../../../Firebase'
class Coments extends Component{
    constructor(props){
        super(props);
        this.state={
            comment: [],
        }
    }
    componentDidMount(){
        this.listener8 = this.props.firebase
            .dothisdb()
            .collection('comments')
            .orderBy('date', 'desc')
            .onSnapshot((snapShot)=>{
                this.setState({
                    comment: snapShot.docs.map((doc)=>{
                        return {id: doc.id, data: doc.data()}
                    })
                })
            },error=>{
                console.log(error)
            })
    }
    componentWillUnmount(){
        this.listener8();
    }
    onLog2=()=>{
        console.log(this.state.comment)
    }
    render(){
        return(
            <div className='MyaccountBOX'>
                <h2 onClick={this.onLog2}>Comentarios</h2>
                <Eachcomment comments={this.state.comment} />
            </div>
        )
    }
}
export default withFirebase(Coments);

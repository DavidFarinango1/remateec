import React, { Component } from 'react'
import Eachcomment from './eachcomment.js'
import Eachsuggestion from './eachsuggestion.js'
import { withFirebase } from '../../../../Firebase'
class Coments extends Component{
    constructor(props){
        super(props);
        this.state={
            comment: [],
            suggestion: [],
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
        this.listener9 = this.props.firebase
            .dothisdb()
            .collection('suggestionprods')
            .orderBy('date', 'desc')
            .onSnapshot((snapShot)=>{
                this.setState({
                    suggestion: snapShot.docs.map((doc)=>{
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
    onLog3=()=>{
        console.log(this.state.suggestion)
    }
    deleteC=(id)=>{
        this.props.firebase
            .dothisdb().collection('comments').doc(id).delete()
    }
    deleteS=(id)=>{
        this.props.firebase
            .dothisdb().collection('suggestionprods').doc(id).delete()
    }
    render(){
        return(
            <div className='MyaccountBOX'>
                <div>
                    <h2 onClick={this.onLog2}>Comentarios</h2>
                    <Eachcomment 
                    comments={this.state.comment}
                    deletecomment={this.deleteC}
                    />
                </div>
                <div>
                    <h2 onClick={this.onLog3}>Sugerencias</h2>
                    <Eachsuggestion 
                    suggestion={this.state.suggestion} 
                    deletesuggestion={this.deleteS}
                    />
                </div>
            </div>
        )
    }
}
export default withFirebase(Coments);

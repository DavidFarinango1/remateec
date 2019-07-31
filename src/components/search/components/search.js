import React, { Component } from 'react'
import { withFirebase } from '../../../Firebase'
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            query: this.props.id,
            list: [],
            result: [],
        }
    }
    componentDidMount(){
        this.listener0 = 
            this.props.firebase
                .dothisdb()
                .collection('products')
                .onSnapshot((snapShots)=>{
                    let search = this.state.query
                    this.setState({
                        list: snapShots.docs.map((doc)=>{
                            return { 
                                data: doc.data()}
                        })
                    }, ()=>{
                        if(search){
                            let result = this.state.list.filter((item)=>{
                                return item.data.p_name.includes(search)
                            })
                            this.setState({
                                result,
                            })
                        }else{
                            console.log('no hay nada')
                        }
                    }
                    )
                },error=>{
                    console.log(error)
                })
    }
    render(){
        return(
            <div>
                {
                    this.state.result.map((item)=>(
                        <div>
                            <p>{item.data.p_name}</p>
                            <p>{item.data.p_price}</p>
                            <img src={item.data.p_principal_image} alt='imagen principal' width='100px'/>
                        </div>
                    ))                 
                    
                }
            </div>
        )
    }
}
export default withFirebase(Search)
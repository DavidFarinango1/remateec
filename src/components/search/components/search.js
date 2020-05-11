import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withFirebase } from '../../../Firebase'
import * as actions from '../../../store/actions/index'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import './search.css'
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
                                id: doc.id,
                                data: doc.data()
                            }
                        })
                    }, ()=>{
                        if(search){
                            let result = this.state.list.filter((item)=>{
                                return item.data.p_name.toLowerCase().includes(search.toLowerCase())
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
    ONC=()=>{
        console.log(this.state.result)
    }
    addUnit=(product)=>{
        this.props.actions.addToCart(product);
    } 
    render(){
        return(
            <div>
                <div onClick={this.ONC}>
                    <h4 className="Search-result">Resultados para {this.state.query}:</h4>
                </div>
                <div>
                    {
                        this.state.result.map((item, key)=>(
                            <div className="Search-principalbox" key={key}>
                                <div className="s-a">
                                   <Link to={'/product/' + item.id}>
                                        <img src={item.data.p_principal_image} alt='imagen principal' width='100px'/>
                                    </Link>
                                </div>
                                <div className="s-b">
                                    <p>{item.data.p_name}</p>
                                </div>
                                <div className="s-c">
                                    <p><strong>Precio: </strong>${item.data.p_price} <small style={{color: 'grey'}}>(No incluye IVA)</small></p>
                                </div>
                                <div className="s-d">
                                    {/* <p>Envio gratis a partir de $20,00</p> */}
                                </div>
                                <div className="s-e">
                                    <p>Disponible</p>
                                </div>
                                <div className="s-f">
                                    <button type="button" className="btn btn-outline-primary btn1in" onClick={() => this.addUnit(item)}>Agregar al carrito</button>
                                    <button type="button" className="btn btn-outline-primary btn2in" onClick={() => this.addUnit(item)}>Agregar</button>
                                </div>
                            </div>
                        ))                                    
                    }
                </div>
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
)(Search)
// export default withFirebase(Search)
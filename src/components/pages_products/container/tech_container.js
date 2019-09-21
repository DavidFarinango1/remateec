import React, {Component} from 'react'
import Header from '../../header/container/headercontainer'
import Slides from '../../slides/components/slides'
import CartContainer from '../../Cart/cart_container'
import Tech from '../components/tech'
import Footer from '../../footer/container/footer-container'
import ClothesSelected from '../components/clothesselected'

import { withFirebase } from '../../../Firebase'
import * as actions from '../../../store/actions/index'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import styled from 'styled-components'

// const Container = styled.div`
//     background-color: #444;
//     color: white;
//     padding: 10px;
//     position: fixed;
//     top: ${props => props.top}px;
//     right: 16px;
//     z-index: 99999;
//     transition: top 0.5s ease;
//     height: 100 vh;
// `;

class TechContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            tech_prods:[],
            data: '',
            // top: -100,
            id: '',
            filteredData: [],
            filterword: '',
            result2:[],
            show: false,
        }
    }
    componentDidMount(){
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
    }
    setLaptopsComputadoras=()=>{
        this.setState({
            filterword: 'LaptopsComputadoras'
        },()=>{
            this.readyToFilter()
        })
    }
    setAccesoriosComputacion=()=>{
        this.setState({
            filterword: 'AccesoriosComputacion'
        },()=>{
            this.readyToFilter()
        })
    }
    setCelularesTablets=()=>{
        this.setState({
            filterword: 'CelularesTablets'
        },()=>{
            this.readyToFilter()
        })
    }
    setAccesoriosCelularesTablets=()=>{
        this.setState({
            filterword: 'AccesoriosCelularesTablets'
        },()=>{
            this.readyToFilter()
        })
    }
    setImpresoras=()=>{
        this.setState({
            filterword: 'Impresoras'
        },()=>{
            this.readyToFilter()
        })
    }
    setAccesoriosImpresoras=()=>{
        this.setState({
            filterword: 'AccesoriosImpresoras'
        },()=>{
            this.readyToFilter()
        })
    }
    readyToFilter=()=>{
        let filterwordReal =this.state.filterword
        if(filterwordReal){
            let result2 = this.state.tech_prods.filter((item)=>{
                // return item.data.p_subcategory.toLowerCase().includes(filterwordReal.toLowerCase())
                return item.data.p_subcategory.toLowerCase() === filterwordReal.toLowerCase()
            })
            this.setState({
                result2,
                show: true,
            },()=>{
                console.log(this.state.result2)
                console.log(this.state.show)
            })
        }else{
            console.log('no hay nada')
        }
    }

    render(){
        return(        
            <div>
                <Header />
                <div className="StationeryPbox">
                    <div className="StationeryPbox2">
                        {/* <CartContainer /> */}
                        <div>
                            <h3 className="CCHselect" onClick={()=>{this.setState({show: false},()=>{console.log(this.state.show)})}}>Tecnologia</h3>
                        </div>
                        <div className="CCPselect" style={{marginLeft: '2em'}}>
                            <p onClick={this.setLaptopsComputadoras}>Laptops, Computadoras o sus partes</p> 
                            <p onClick={this.setAccesoriosComputacion}>Accesorios de computación</p> 
                            <p onClick={this.setCelularesTablets}>Celulares o Tablets</p> 
                            <p onClick={this.setAccesoriosCelularesTablets}>Accesorios de celulares o tablets</p> 
                            <p onClick={this.setImpresoras}>Impresoras</p> 
                            <p onClick={this.setAccesoriosImpresoras}>Accesorios de impresoras</p> 
                        </div>

                    </div>
                    <div className="StationeryPbox1">
                        {/* <Tech 
                            products2={this.state.tech_prods}
                            // handleOnAdd={this.dispachAddToCart}
                            // openModal2={this.openModal}
                            // data_modal={this.state.data}
                        />   */}
                        {
                            this.state.show 
                            ?
                            <ClothesSelected
                                products2={this.state.result2}
                            />
                            :
                            <Tech 
                                products2={this.state.tech_prods}
                            />
                            // <p>holi</p>
                        } 
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
// const mapStateToProps=(state, props)=>( {
//     count: state.get('count'),
// })
// const mapDispatchToProps=(dispatch)=>({
//       actions: bindActionCreators(actions, dispatch)
// })
// export default compose(
//     withFirebase,
//     connect(
//         mapStateToProps,
//         mapDispatchToProps,
//     ),
// )(TechContainer);
export default withFirebase(TechContainer);
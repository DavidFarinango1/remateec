import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './oneprodcateg.css'
import OneDescriptionModal from './oneDescriptionModal'

class RecAddedProds extends Component{
    constructor(props){
        super(props);
        this.state={
            translate: 0,
            translate2: 190,

        }
    }
    suma=()=>{
        this.setState({
            translate : this.state.translate-190
        })
        console.log(this.state.translate)
    }
    resta=()=>{
        if(this.state.translate<0){
            this.setState({
                translate : this.state.translate+190
            })

        }else{
            this.setState({
                translate : 0
            })
        }
    }
    render(){
        return(
            <div className="OneProdCateg">
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modalwid" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-body OMDmb">
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        <OneDescriptionModal oneproduct={this.props.data_modal} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                            
                <div>
                    <h3 className="OneProd_title">
                        Agregados recientemente:
                    </h3>
                </div>
                    <div className="cards-slider" >
                        <button type="button" className="btn btn-light button_next" onClick={this.suma}>></button>
                        <button type="button" className="btn btn-light button_previous" onClick={this.resta}>&lt;</button>
                        <div className="cards-slider-wrapper"style={{
                            'transform': `translateX(${this.state.translate}px)`
                        }}>
                            {
                                this.props.products2 && this.props.products2 !== undefined ? this.props.products2.map((item,key)=>(
                                    <div className='OneProdCateg_box card2' key={key}>
                                        <div className='OneProdCateg_principal_image'>
                                            <Link to={'/product/' + item.id}>
                                                <img className="OneProdCateg_pi_img" src={item.data.p_principal_image} width="200px" alt="imagen producto principal"/> 
                                            </Link>
                                        </div>
                                        <div className='OneProdCateg_price'>
                                            <p className='OneProdCateg_P'> ${item.data.p_price} </p>
                                        </div>
                                        <div className='OneProdCateg_buttons'>
                                            <button className='OneProdCateg_button1  btn btn-info' onClick={() => this.props.handleOnAdd(item)}>Comprar</button>
                                            <button className='OneProdCateg_button1 OneProdCateg_button1_2 btn btn-danger' onClick={() => this.props.openModal2(item)} data-toggle="modal" data-target="#exampleModalCenter">Ver más</button>
                                        </div>
                                        {/* <div>
                                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        ...
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                )):null                
                            }
                        </div>
                    </div>
            </div>
        )
    }
}
export default RecAddedProds;
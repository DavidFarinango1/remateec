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
                <div>
                    <h3 className="OneProd_title">
                        Agregados recientemente:
                    </h3>
                </div>
                {/* <div className="OneProd_products"> */}
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
                                        {/* <a className="carousel-control-prev slide_control" href="#carouselindicator1" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next slide_control" href="#carouselindicator1" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a> */}
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
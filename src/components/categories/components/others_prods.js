import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './oneprodcateg.css'
import OneDescriptionModal from './oneDescriptionModal'

class OthersProds extends Component{
    render(){
        return(
            <div className="OneProdCateg">
                <div>
                    <h3 className="OneProd_titlenone">
                        Otros productos:
                    </h3>
                </div>
                <div className="cards-slider2">
                    <div className="cards-slider-wraper2">
                        {
                            this.props.products2 && this.props.products2 !== undefined ? this.props.products2.map((item,key)=>(
                                <div className='OneProdCateg_box card2' key={key}>
                                    <div className='OneProdCateg_principal_image'>
                                        {/* <Link to={'/product/' + item.id}> */}
                                        <a href={'/product/' + item.id}>
                                            <img className="OneProdCateg_pi_img" src={item.data.p_principal_image} width="200px" alt="imagen producto principal"/> 
                                        {/* </Link> */}
                                        </a>
                                    </div>
                                    <div className='PreciosOferta'>
                                            <a className='Namerecc'>{item.data.p_name}</a>

                                    </div>
                                    <div className='OneProdCateg_price'>
                                        <p className='OneProdCateg_P'> {item.data.p_logistic_seller} </p>
                                    </div>
                                    <div className='OneProdCateg_showPrice'>
                                        {/* <div className="alert alert-primary ShowPriceAlert" role="alert">
                                            {item.data.p_logistic_seller}
                                        </div> */}
                                        {item.data.p_logistic_seller === 'Nuevo' ? (
                <div className='OneProdCateg_showPrice'>
                    <div className="alert alert-primary ShowPriceAlert" role="alert">
                        Nuevo
                    </div>
                </div>
            ) : (
                <div className='OneProdCateg_showPrice'>
                    <div className="alert alert-danger ShowPriceAlert" role="alert">
                        Usado
                    </div>
                </div>
            )}
                                    </div>
                                    <div className=''>
                                        <div className='PreciosOferta price_origin'>
                                        <   div className="price_1">
                                                $<a className='price1_1'>{item.data.p_price}  </a>
                                            </div>
                                            <div className="price_2">
                                            $<a>{item.data.p_offerprice}</a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='alertf'>
                                        <a> AHORRAS $</a>{item.data.p_price - item.data.p_offerprice}
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
export default OthersProds;
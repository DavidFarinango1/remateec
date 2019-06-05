import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './onlymyproduct.css'

class OnlyMyProduct extends Component{
    render(){
        return(
            <div className="OnlyMyProductBox">
                <h2 className='JMP_title'>Mis productos</h2>
                {
                    this.props.products2 && this.props.products2 !== undefined ? this.props.products2.map((item,key)=>(
                        <div className='JMP_box' key={key}>
                            <div className='JMP_name'>
                                <p className='JMP_p_name'>{item.data.p_name}</p>
                            </div>
                            <div className='JMP_secundary_images'>
                                <img src={item.data.p_principal_image} width="50px" alt="imagen producto principal"/> 
                                <img src={item.data.p_secundary_image2} width="50px" alt="imagen producto 2"/>
                                <img src={item.data.p_secundary_image3} width="50px" alt="imagen producto 3"/>
                            </div>
                            <div className='JMP_principal_image'>
                                <Link to={'/product/' + item.id}>
                                    <img src={item.data.p_principal_image} width="200px" alt="imagen producto principal"/> 
                                </Link>
                            </div>
                            <div className='JMP_price'>
                                <p className='JMP_P'><strong>Precio:</strong></p>
                                <p className='JMP_P'>{item.data.p_price}</p>
                            </div>
                            <div className='JMP_sendby'>
                                <p className='JMP_P'><strong>Enviado por:</strong></p>
                                <p className='JMP_P'>{item.data.p_logistic_seller}</p>
                            </div>
                            <div className='JMP_buttons'>
                            <button className='JMP_button1 btn btn-info' onClick={()=>{this.props.getFile2(item.id)}} >Editar producto</button>
                            <button className='JMP_button1 btn btn-danger' onClick={()=>{this.props.deleteItem2(item.id, item.data.p_principal_image,item.data.p_secundary_image2,item.data.p_secundary_image3)}}>Eliminar producto</button>
                            </div>
                        </div>
                    )):null
                }
            </div>
        )
    }
}
export default OnlyMyProduct;
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class ClothesSelected extends Component{
    render(){
        return(
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                            this.props.products2 && this.props.products2 !== undefined ? this.props.products2.map((item,key)=>(
                                <div className='CSPB1' key={key}>
                                    <div className=''>
                                        <Link to={'/product/' + item.id}>
                                            <img className="CSIMG zoom2" src={item.data.p_principal_image} width="200px" alt="imagen producto principal"/> 
                                        </Link>
                                    </div>
                                    <div>
                                        <div className='CSPDIV'>
                                            <p className='CSPrice'> USD: ${item.data.p_price} </p>
                                            <p className='CSName'>{item.data.p_name} </p>
                                            <p className='CSName2'>Envio gratis si supera los $20,00 </p>
                                            <p className='CSName3'>Precio no incluye IVA</p>
                                        </div>
                                        <div style={{textAlign: 'center'}}  className=''>
                                        <Link to={'/product/' + item.id}>
                                            <button className='btn btn-info' >Ver más detalles</button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            )):null                
                        }
            </div>
        )
    }
}
export default ClothesSelected;
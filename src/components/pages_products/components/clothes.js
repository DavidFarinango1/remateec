import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import OneDescriptionModal from '../../categories/components/oneDescriptionModal'

class Clothes extends Component{
    constructor(props){
        super(props);
        this.state={
            data2: '',
        }
    }
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
            // <div>
            //     <h4 className="Search-result">Ropa:</h4>
            //     <div>
            //     <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            //         <div className="modal-dialog modal-dialog-centered modalwid" role="document">
            //             <div className="modal-content">
            //                 <div className="modal-body OMDmb">
            //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            //                         <span aria-hidden="true">&times;</span>
            //                     </button>
            //                     <OneDescriptionModal oneproduct={this.props.data_modal} />
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="cards-slider2-stationery">
            //         <div className="cards-slider-wraper2-stationery">
            //     {
            //                 this.props.products2 && this.props.products2 !== undefined ? this.props.products2.map((item,key)=>(
            //                     <div className='OneProdCateg_box card2' key={key}>
            //                         <div className='OneProdCateg_principal_image'>
            //                             <Link to={'/product/' + item.id}>
            //                                 <img className="OneProdCateg_pi_img" src={item.data.p_principal_image} width="200px" alt="imagen producto principal"/> 
            //                             </Link>
            //                         </div>
            //                         <div className='OneProdCateg_price'>
            //                             <p className='OneProdCateg_P'> ${item.data.p_price} </p>
            //                         </div>
            //                         <div className='OneProdCateg_buttons'>
            //                             <button className='OneProdCateg_button1  btn btn-info' onClick={() => this.props.handleOnAdd(item)}>Comprar</button>
            //                             <button className='OneProdCateg_button1 OneProdCateg_button1_2 btn btn-danger' onClick={() => this.props.openModal2(item)} data-toggle="modal" data-target="#exampleModalCenter">Ver más</button>
            //                         </div>
            //                     </div>
            //                 )):null                
            //             }
            //             </div>
            //     </div>

            //     </div>
            // </div>
        )
    }
}

export default Clothes;
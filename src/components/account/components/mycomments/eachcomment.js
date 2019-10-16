import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

class Coments extends Component{
    render(){
        return(
            <div>
                {
                    this.props.comments && this.props.comments !== undefined ? this.props.comments.map((item, key)=>(
                        <div className='ordertotal' key={key}>
                            <div>
                                <h4 className='ordertotalpedido'>Comentario #{item.id}</h4> 
                                <h6>Fecha: {moment(item.data.date.toDate()).calendar()} </h6>
                                <strong>Datos del contacto</strong>
                            </div>
                            <div className='Orderbox'>
                                <p><strong>Nombre: </strong>{item.data.contact_name}</p>
                                <p><strong>Celular: </strong>{item.data.contact_cell}</p>
                                <p><strong>Correo: </strong>{item.data.contact_email}</p>
                            </div>
                                <p><strong>Mensaje:</strong>{item.data.contact_message}</p>
                            <div>
                                <button className='JMP_button1 btn btn-danger' onClick={()=>{this.props.deletecomment(item.id)}}>Eliminar comentario</button>
                            </div>
                        </div>
                    ))
                    : null
                }
            </div>
        )
    }
}
export default Coments;
import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

class Suggestion extends Component{
    render(){
        return(
            <div>
                {
                    this.props.suggestion && this.props.suggestion !== undefined ? this.props.suggestion.map((item, key)=>(
                        <div className='ordertotal' key={key}>
                            <div>
                                <h4>Sugerencia #{item.id}</h4> 
                                <h6>Fecha: {moment(item.data.date.toDate()).calendar()} </h6>
                                {/* <strong>Datos del contacto</strong> */}
                            </div>
                            <div className='Orderbox'>
                                <p><strong>Sugerencia: </strong>{item.data.suggestion_prod}</p>
                            </div>
                            <div>
                                <button className='JMP_button1 btn btn-danger' onClick={()=>{this.props.deletesuggestion(item.id)}}>Eliminar sugerencia</button>
                            </div>
                        </div>
                    ))
                    : null
                }
            </div>
        )
    }
}
export default Suggestion;
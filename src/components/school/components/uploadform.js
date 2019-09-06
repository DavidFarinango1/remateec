import React, { Component } from 'react'
import './uploadform.css'
import { MDBProgress } from 'mdbreact';
// import { withFirebase } from '../../../../Firebase'


class UploadProducts extends Component {
    render(){
        const {
            inputValue_name_school,
            inputValue_cellphone_school,
            inputValue_adress_school,
            inputValue_gender_school,
            inputValue_type_school,
            inputValue_shortdetails_school,
        } = this.props.state; 
        return(
            <div className="UploadProductsPBox">
                <h1 className="UploadTitleh1">Formulario</h1>
                <form onSubmit={this.props.createProduct} >
                    
                    <div className="UPB1">
                        <p>Nombre y apellido:</p>
                        <input name="inputValue_name_school" value = {inputValue_name_school} onChange={this.props.onActionChange} className="form-control form-control-sm" placeholder="Nombre y apellido"  type="text" maxLength="150" required></input>
                    </div>
                    <div className="UPB1">
                        <p>Celular:</p>
                        <input name="inputValue_cellphone_school" value = {inputValue_cellphone_school} onChange={this.props.onActionChange} className="form-control form-control-sm" placeholder="Celular de contacto"  type="number" maxLength="150" required></input>
                    </div>
                    <div className="UPB1">
                        <p>Dirección:</p>
                        <input name="inputValue_adress_school" value = {inputValue_adress_school} onChange={this.props.onActionChange} className="form-control form-control-sm" placeholder="Dirección de entrega"  type="text" maxLength="150" required></input>
                    </div>
                    <div className="UPB2">
                        <p>Lista de útiles para hombre o mujer:</p>
                        <select name="inputValue_gender_school" value={inputValue_gender_school} onChange={this.props.onActionChange} className="custom-select custom-select-sm" >
                            <option value="None" selected>Escoge entre:</option>
                            <option value="Man">Hombre</option>
                            <option value="Woman">Mujer</option>
                        </select>
                    </div>
                    <div className="UPB2">
                        <p>Tipo de lista:</p>
                        <select name="inputValue_type_school" value={inputValue_type_school} onChange={this.props.onActionChange} className="custom-select custom-select-sm" >
                            <option value="None" selected>Escoge entre:</option>
                            <option value="Cheap">Económica</option>
                            <option value="Medium">Estandar</option>
                            <option value="Top">Premium</option>
                        </select>
                    </div>
                    <div className="UPB3">
                        {/* <p className="UPB_img_title">Agregar imagenes del producto</p> */}
                        <div className="UPBprincipal gridboximg">
                            <img className="UPB3img" src={this.props.picture} alt=''/>
                            <div className="UPBprinloader">
                                <MDBProgress material value={this.props.uploadValue} color="info" striped />
                            </div>
                            <div className="UPBprinput" id="UPB3input">
                                <p>Subir lista de útiles</p>
                                <input onChange={this.props.handleUpload}  type= 'file' id="UPB3in"  />
                            </div>
                        </div>
                        
                    </div>
                    {/* <div className="UPB4">
                            <p>Precio</p>
                            <input name="inputValue_price" value={inputValue_price} onChange={this.props.onActionChange} className="form-control form-control-sm" type="text" placeholder='Usar puntos para separar los decimales' required></input>
                    </div> */}
                    <div className="UPB5">
                            <p>Inserte algún comentario o sugerencia:</p>
                            <input name="inputValue_shortdetails_school" value={inputValue_shortdetails_school} onChange={this.props.onActionChange} className="form-control form-control-sm" type="text" maxLength="400" data-length="400" required></input>
                            <small className="form-text text-muted">
                                Si desea escriba algún detalle sobre su lista.
                            </small>
                    </div>
                    <div className="form-group form-check PayBox_form">
                        <label className="form-check-label PayBox_form_label" htmlFor="exampleCheck1">Quito</label>
                        <input type="checkbox" className="form-check-input PayBox_form_input" id="exampleCheck1" required/>
                    </div>
                    <div className="UPB9">
                        <button className="btn btn-outline-success" type="submit" >
                            {/* {this.props.editReal ? 'Editar': 'Agregar'} */}
                            Enviar formulario
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UploadProducts
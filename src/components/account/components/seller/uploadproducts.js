import React, { Component } from 'react'
import './uploadproducts.css'
import { MDBProgress } from 'mdbreact';
import { withFirebase } from '../../../../Firebase'
import Drodownsss from './dropdownsss.js'

class UploadProducts extends Component {
    render(){
        const {
            inputValue_mybussinessname,
            inputValue_mycell,
            inputValue_mygps,
            inputValue_name,
            inputValue_price,
            inputValue_offerprice,
            inputValue_shortdetails,
            details_general_description1,
            details_general_description2,
            logistic_seller,
        } = this.props.state; 
        return(
            <div className="UploadProductsPBox">
                <h1 className="UploadTitleh1">Agregar o Editar productos</h1>
                <form onSubmit={this.props.createProduct} >
                    <h3>Datos del vendedor</h3>
                    <div>
                        <div className="UPB1">
                            <p>Empresa:</p>
                            <input name="inputValue_mybussinessname" value = {inputValue_mybussinessname} onChange={this.props.onActionChange} className="form-control form-control-sm" placeholder="Nombre"  type="text" maxLength="150" required></input>
                            <p>Teléfono:</p>
                            <input name="inputValue_mycell" value = {inputValue_mycell} onChange={this.props.onActionChange} className="form-control form-control-sm" placeholder="Número decédula"  type="text" maxLength="150" required></input>
                            <p>Dirección:</p>
                            <input name="inputValue_mygps" value = {inputValue_mygps} onChange={this.props.onActionChange} className="form-control form-control-sm" placeholder="Dirección"  type="text" maxLength="150" required></input>
                        </div>
                    </div>
                    <div className="UPB1">
                        <p>Nombre:</p>
                        <input name="inputValue_name" value = {inputValue_name} onChange={this.props.onActionChange} className="form-control form-control-sm" placeholder="Nombre del producto"  type="text" maxLength="150" required></input>
                    </div>
                    <div className="UPB2">
                        <Drodownsss 
                        onC={this.props.onC}
                        valor={this.props.valor}
                        valor2={this.props.valor2}
                        valor3={this.props.valor3}
                        // valor4={this.props.valor4}
                        // valor5={this.props.valor5}
                        onActionChangeD={this.props.onActionChangeD}
                        />                        
                    </div>
                    <div className="UPB3">
                        {/* <p className="UPB_img_title">Agregar imagenes del producto</p> */}
                        <div className="UPBprincipal gridboximg">
                            <img className="UPB3img" src={this.props.picture} alt=''/>
                            <div className="UPBprinloader">
                                <MDBProgress material value={this.props.uploadValue} color="info" striped />
                            </div>
                            <div className="UPBprinput" id="UPB3input">
                                <p>Agregar</p>
                                <input onChange={this.props.handleUpload}  type= 'file' id="UPB3in"  />
                            </div>
                        </div>
                        <div className="UPBsecundary gridboximg">
                            <img className="UPB3img" src={this.props.picture_2} alt=''/>
                            <div className="UPBprinloader">
                                <MDBProgress material value={this.props.uploadValue_2} color="info" striped />
                            </div>
                            <div className="UPBprinput" id="UPB3input2">
                                <p>Agregar</p>
                                <input onChange={this.props.handleUpload_2} type= 'file' id="UPB3in"  />
                            </div>
                        </div>
                        <div className="UPBother gridboximg">
                            <img className="UPB3img" src={this.props.picture_3} alt=''/>
                            <div className="UPBprinloader">
                                <MDBProgress material value={this.props.uploadValue_3} color="info" striped />
                            </div>
                            <div className="UPBprinput" id="UPB3input2">
                                <p>Agregar</p>
                                <input onChange={this.props.handleUpload_3}  type= 'file' id="UPB3in"  />
                            </div>
                        </div>
                    </div>
                    <div className="UPB4">
                            <p>Precio Normal:</p>
                            <input name="inputValue_price" value={inputValue_price} onChange={this.props.onActionChange} className="form-control form-control-sm" type="text" placeholder='Usar puntos para separar los decimales' required></input>
                    </div>
                    <div className="UPB4">
                            <p>Precio Oferta:</p>
                            <input name="inputValue_offerprice" value={inputValue_offerprice} onChange={this.props.onActionChange} className="form-control form-control-sm" type="text" placeholder='Usar puntos para separar los decimales' required></input>
                    </div>
                    <div className="UPB5">
                            <p>Breve detalle:</p>
                            <input name="inputValue_shortdetails" value={inputValue_shortdetails} onChange={this.props.onActionChange} className="form-control form-control-sm" type="text" maxLength="400" data-length="400" required></input>
                            <small className="form-text text-muted">
                            El breve detalle para mejor compresión del comprador no debe superar los 200 caracteres, destaque las características del producto y su uso.
                            </small>
                    </div>
                    <div className="UPB6">
                        <h3>Descripción del producto</h3>
                        <div className="UPB6-a">
                            <h4>Descripción 1</h4>
                            {/* <input name="title_general_description1" value={title_general_description1} className="form-control form-control-sm" type="text" onChange={this.props.onActionChange} placeholder='Titulo general descripción 1:' required></input> */}
                            <textarea name="details_general_description1" value={details_general_description1} className="form-control form-control-sm" onChange={this.props.onActionChange} maxLength="1000" data-length="1000" rows="3" placeholder='Detalle general descripción 1:' required></textarea>
                        </div>
                        <div className="UPB6-b">
                            <h4>Descripción 2</h4>
                            {/* <input name="title_general_description2" value={title_general_description2} className="form-control form-control-sm" type="text" onChange={this.props.onActionChange} placeholder='Titulo general descripción 2:' required></input> */}
                            <textarea name="details_general_description2" value={details_general_description2} className="form-control form-control-sm" onChange={this.props.onActionChange} maxLength="500" data-length="500" rows="3" placeholder='Detalle general descripción 2:' required></textarea>
                        </div>
                    </div>
                    <div className="UPB8">
                        <p>Estado del producto:</p>
                        <select name="logistic_seller" value={logistic_seller} onChange={this.props.onActionChange} className="custom-select custom-select-sm">
                            <option value="None" selected>Estado del producto</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Usado">Usado</option>
                        </select>
                        <p>Revisar terminos y condiciones</p>
                    </div>
                    <div className="UPB9">
                        <button className="btn btn-outline-success" type="submit" >
                            {this.props.editReal ? 'Editar': 'Agregar'}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withFirebase(UploadProducts)
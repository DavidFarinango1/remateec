import React, { Component } from 'react'
import './uploadproducts.css'
import { MDBProgress } from 'mdbreact';
import { withFirebase } from '../../../../Firebase'


class UploadProducts extends Component {
    render(){
        const {
            inputValue_name,
            inputValue_categories,
            inputValue_price,
            inputValue_shortdetails,
            // title_general_description1,
            details_general_description1,
            // title_general_description2,
            details_general_description2,
            // title_general_description3,
            // details_general_description3,
            // myubication,
            logistic_seller,
        } = this.props.state; 
        return(
            <div className="UploadProductsPBox">
                <h1 className="UploadTitleh1">Agregar o Editar productos</h1>
                <form onSubmit={this.props.createProduct} >
                    <div className="UPB1">
                        <p>Nombre:</p>
                        <input name="inputValue_name" value = {inputValue_name} onChange={this.props.onActionChange} className="form-control form-control-sm" placeholder="Nombre del producto"  type="text" maxLength="150" required></input>
                    </div>
                    <div className="UPB2">
                        <p>Categorias</p>
                        <select name="inputValue_categories" value={inputValue_categories} onChange={this.props.onActionChange} className="custom-select custom-select-sm" >
                            <option value="None" selected>Escoge la categoria</option>
                            <option value="Tecnologia">Tecnologia</option>
                            <option value="Libros">Libros</option>
                            <option value="Papeleria">Papeleria</option>
                            <option value="Otros">Otros</option>
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
                            <p>Precio</p>
                            <input name="inputValue_price" value={inputValue_price} onChange={this.props.onActionChange} className="form-control form-control-sm" type="text" placeholder='Usar puntos para separar los decimales' required></input>
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
                            <textarea name="details_general_description1" value={details_general_description1} className="form-control form-control-sm" onChange={this.props.onActionChange} maxLength="500" data-length="500" rows="3" placeholder='Detalle general descripción 1:' required></textarea>
                        </div>
                        <div className="UPB6-b">
                            <h4>Descripción 2</h4>
                            {/* <input name="title_general_description2" value={title_general_description2} className="form-control form-control-sm" type="text" onChange={this.props.onActionChange} placeholder='Titulo general descripción 2:' required></input> */}
                            <textarea name="details_general_description2" value={details_general_description2} className="form-control form-control-sm" onChange={this.props.onActionChange} maxLength="500" data-length="500" rows="3" placeholder='Detalle general descripción 2:' required></textarea>
                        </div>
                        {/* <div className="UPB6-c">
                            <h4>Descripción 3</h4>
                            <input name="title_general_description3" value={title_general_description3} className="form-control form-control-sm" type="text" onChange={this.props.onActionChange} placeholder='Titulo general descripción 3:' required></input>
                            <textarea name="details_general_description3" value={details_general_description3} className="form-control" onChange={this.props.onActionChange} maxLength="200" data-length="200" rows="3" placeholder='Detalle general descripción 3:' required></textarea>
                        </div> */}
                    </div>
                    {/* <div className="UPB7">
                            <p>Mi dirección:</p>
                            <input name="myubication" value={myubication} className="form-control form-control-sm" type="text" onChange={this.props.onActionChange} placeholder='Donde se encuentran los productos' required></input>
                    </div> */}
                    <div className="UPB8">
                        <p>Forma de Envio:</p>
                        <select name="logistic_seller" value={logistic_seller} onChange={this.props.onActionChange} className="custom-select custom-select-sm">
                            <option value="None" selected>Escoge la forma de enviar tus productos</option>
                            <option value="Personal">Personal</option>
                            <option value="A_traves_de_weygo">A través de Weygo</option>
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
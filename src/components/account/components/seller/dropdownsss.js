import React, { Component } from 'react'

class Dropdownsss extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         valor: '',
    //         valor2: '',
    //         valor3: '',
    //     }
    // }
    // onActionChange=event=>{
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     },()=>{
    //             if(this.state.valor==='Tecnologia'){
    //                 this.setState({
    //                     valor2: <div>
    //                         <select name="valor3" value={this.state.valor3} onChange={this.onActionChange} className="custom-select custom-select-sm" >
    //                             <option value="None" selected>Escoge la categoria</option>
    //                             <option value="LaptopsComputadoras">Laptops o Computadoras</option>
    //                             <option value="AccesoriosComputacion">Accesorios de computación</option>
    //                             <option value="CelularesTablets">Celulares o Tablets</option>
    //                             <option value="AccesoriosCelularesTablets">Accesorios de celulares o tablets</option>
    //                             <option value="Impresoras">Impresoras</option>
    //                             <option value="AccesoriosImpresoras">Accesorios de impresoras</option>
    //                         </select>   
    //                     </div>
    //                 })
    //             }
    //             if(this.state.valor==='Ropa'){
    //                 this.setState({
    //                     valor2: <div>
    //                         <select name="valor3" value={this.state.valor3} onChange={this.onActionChange} className="custom-select custom-select-sm" >
    //                             <option value="None" selected>Escoge la categoria</option>
    //                             <option value="Blusas">Blusas y Camisas</option>
    //                             <option value="Vestidos">Vestidos y pantalones</option>
    //                             <option value="Zapatos">Zapatos</option>
    //                             <option value="AccesoriosMujer">Accesorios de mujer</option>
    //                         </select>   
    //                     </div>
    //                 })
    //             }
    //             if(this.state.valor==='Papeleria'){
    //                 this.setState({
    //                     valor2: <div>
    //                         <select name="valor3" value={this.state.valor3} onChange={this.onActionChange} className="custom-select custom-select-sm" >
    //                             <option value="None" selected>Escoge la categoria</option>
    //                             <option value="Papeleria">Papeleria</option>
    //                             <option value="SuministrosOficina">Suministros de oficina</option>
    //                         </select>   
    //                     </div>
    //                 })
    //             }
    //             if(this.state.valor==='Otros'){
    //                 this.setState({
    //                     valor2: <div>
    //                         <select name="valor3" value={this.state.valor3} onChange={this.onActionChange} className="custom-select custom-select-sm" >
    //                             <option value="None" selected>Escoge la categoria</option>
    //                             <option value="Otros1">Otros1</option>
    //                             <option value="Otros2">otros2</option>
    //                         </select>   
    //                     </div>
    //                 })
    //             }
    //         })
    // }
    // onC=()=>{
    //     console.log(this.state.valor)
    //     console.log(this.state.valor3)
    // }
    render(){
        return(
            <div>
                {/* <p onClick={this.props.onC}>Consolelog(valor)</p> */}
                <p>Categoria: {this.props.valor} <br/>Subcategoria: {this.props.valor3} </p>
                <select name="valor" value={this.props.valor} onChange={this.props.onActionChangeD} className="custom-select custom-select-sm" >
                    <option value="None" selected>Escoge la categoria</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Ropa">Ropa</option>
                    <option value="Papeleria">Papeleria o Suministros de oficina</option>
                    <option value="Otros">Otros</option>
                </select>
                {
                    this.props.valor2
                }
            </div>
        )
    }
}
export default Dropdownsss;
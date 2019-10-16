import React, { Component } from 'react'

class Dropdownsss extends Component {
    render(){
        return(
            <div>
                <p>Categoria: {this.props.valor} <br/>Subcategoria: {this.props.valor3}</p>
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
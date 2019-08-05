import React, {Component} from 'react'
import './cart.css'
import {Link} from 'react-router-dom'
class Cart extends Component{
    // handleClick=(event)=>{
    //     // console.log(this.props.id);
    //     console.log(this.props);
    //     // this.props.openModal(this.props.id);
    // }

    totalProduct(product){
        var a = this.props.price
        var b = this.props.units
        var total = a*b
        return total
    }

    render(){
        return(        
            <div className="Cart0">
                {/* <Link to={{
                    pathname: '/products',
                    search: `?id=${this.props.id}`,
                    }}
                    id={this.props.id}
                > */}
                <div className="Cart0_a">
                    <Link to={'/product/' + this.props.id}>
                        <div className="Cart1">
                            <img 
                            className="Cart1_1"
                            src={this.props.principal_image} 
                            alt='img prod.'  
                            // onClick={this.handleClick}
                            />
                        </div>
                    </Link>
                    <div className="Cart2">
                        {/* <h4 className="Cart2_1">{this.props.name}</h4> */}
                        <h4 className="Cart2_2">Precio: ${this.totalProduct()}</h4>
                        <h4 className="Cart2_2">Units: {this.props.units}</h4>
                    </div>
                </div>
                <div className="Cart0_b">
                    <div className="Cart3">
                        <button 
                        type="button"
                        className="Opb1 btn btn-light" size= "10px"
                        onClick={() => this.props.onAddUnit()}
                        >+</button>
                        <button 
                        type="button"
                        className="Opb2 btn btn-light" size= "10px"
                        onClick={() => this.props.onDeductUnit()}
                        >-</button>
                    </div>
                    <div className="Cart4">
                        <button type="button" className="Opb3 btn btn-light" onClick={() => this.props.handleDeleteFromCart()}>Quitar producto</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;
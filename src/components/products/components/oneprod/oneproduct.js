// import React from 'react';
// import {Link} from 'react-router-dom';
// import './oneproduct.css';
// import PropTypes from 'prop-types';
// class Oneproduct extends React.Component{
//     handleClick=(event)=>{
//         // Aqui se maneja el click que se da en cada producto
//         console.log(this.props.id);
//         this.props.openModal(this.props.id);
//     }
//     render(){
//         return(
//         <section 
//         className ="box" 
//         >
//             <Link to={{
//                 pathname: '/products',
//                 search: `?id=${this.props.id}`,
//                 }} 
//                 id={this.props.id}
//             >
//                 <img
//                     className="OPimg" 
//                     src={this.props.principal_image} 
//                     alt="productos" 
//                     height="250" 
//                     onClick={this.handleClick}
//                 />
//             </Link>
//             <h6><strong>{this.props.name}</strong> <br /> {this.props.short_details} </h6>
//             <div className="Oneproductbutton1">
//                 <button 
//                 className="Opb1" size= "10px"
//                 onClick={() => this.props.handleOnDeduce(this.props)}
//                 >-</button>
//                 <button 
//                 className="Opb1" size= "10px"
//                 onClick={() => this.props.handleOnAdd(this.props)}
//                 >+</button>
//             </div>
//             <div className="Oneproductbutton2">
//                 <button
//                 onClick={() => this.props.handleOnAdd(this.props)}>
//                     Agregar
//                 </button>       
//             </div>
//         </section>
//         )
//     }
// }
// Oneproduct.propTypes = {
//     image: PropTypes.string,
//     name: PropTypes.string
// }

// export default Oneproduct;
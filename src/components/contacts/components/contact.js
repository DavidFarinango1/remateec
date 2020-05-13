import React, { Component } from 'react'

class Contact extends Component {
    render(){
        return(
            <div>
            <div className="BlogHeader" style={{backgroundImage: `url(./images/others/O7GZJO0.jpg)`}}>
                <h2 className="BlogHeaderH2title" >Contactos</h2>
            </div>
            <div className="BlogSB1"> 
               <div className="BSB1_1" src='https://drive.google.com/open?id=1aybKRbm-q4usjqNW5xJ8pVe0D-FjaYiM&usp=sharing'>
                   {/* <img style={{objectFit: 'contain'}} className="Blogimg"src="./images/others/sucursal1.jpg" alt="Nuestra historia"/> */}
                
                
                   <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1aybKRbm-q4usjqNW5xJ8pVe0D-FjaYiM" style={{width: '100%'}} height="300"></iframe>                
                </div> 
               <div className="BSB1_2">
                   <h4 className="BSB1_2H">Sucursal 1:</h4>
                   <p className="BSB1_2P">
                   Estamos ubicados frente al Concejo Provincial de Pichincha en las calles 10 de agosto y Antonio Ante Oe2-17
                   </p>
                   <span className="iconHeart">♥</span>
               </div>
            </div>
            <div className="BlogSB1">
                <div className="BSB1_2">
                   <h4 className="BSB1_2H">Sucursal 2:</h4>
                   <p className="BSB1_2P">
                   Estamos ubicados en la Santa Prisca y Pasaje Farget cerca de la parada del metro Santa Prisca.
                   </p>
                   <span className="iconHeart">♥</span>
                </div>
                <div className="BSB1_1">
                   {/* <img className="Blogimg"src="./images/others/OHT3MQ0.jpg" alt="Nuestra historia"/> */}
                   <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1aybKRbm-q4usjqNW5xJ8pVe0D-FjaYiM" style={{width: '100%'}} height="300"></iframe>
                </div> 
            </div>
            <div className="BlogSB1">
                <div className="BSB1_1">
                   <img className="Blogimg"src="./images/others/5141.jpg" alt="Nuestra historia"/>
                </div> 
                <div className="BSB1_2">
                   <h4 className="BSB1_2H">Contactos directos al:</h4>
                   <p className="BSB1_2P">
                    <strong>Celular: </strong>0991200163<br />
                    <strong>Correo: </strong>ventasquito.soporte@gmail.com
                   </p>
                   <span className="iconHeart">♥</span>
                </div>
            </div>
        </div>
        )
    }
}
export default Contact;
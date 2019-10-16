import React, { Component } from 'react';
import './blog.css'

class Blog extends Component{
    render(){
        return(
            <div>
                <div className="BlogHeader" style={{backgroundImage: `url(./images/others/O7GZJO0.jpg)`}}>
                    <h2 className="BlogHeaderH2title">Acerca de nosotros</h2>
                </div>
                <div className="BlogSB1"> 
                   <div className="BSB1_1">
                       <img className="Blogimg"src="./images/others/foto1.png" alt="Nuestra historia"/>
                    </div> 
                   <div className="BSB1_2">
                       <h4 className="BSB1_2H">Nuestra historia:</h4>
                       <p className="BSB1_2P">
                       Ventasquito.com es una empresa ecuatoriana que inició sus actividades en el año 2002 con el nombre de Serviexpress, dedicándonos principalmente a la venta de artículos de papelería, suministros de oficina y tecnología, buscamos dar el mejor servicio al cliente posible, siempre tomando en cuenta sus recomendaciones, somos una empresa familiar que busca mejorar constantemente.
                       </p>
                       <span className="iconHeart">♥</span>
                   </div>
                </div>
                <div className="BlogSB1">
                    <div className="BSB1_2">
                       <h4 className="BSB1_2H">Objetivo:</h4>
                       <p className="BSB1_2P">
                       Conectar consumidores, proveedores y repartidores a través de una plataforma fácil de usar enfocándose en la experiencia de usuario, brindando un excelente servicio a todos nuestros clientes y soporte 24/7 mejoramos constantemente.
                       </p>
                       <span className="iconHeart">♥</span>
                    </div>
                    <div className="BSB1_1">
                       <img className="Blogimg"src="./images/others/foto2.png" alt="Nuestra historia"/>
                    </div> 
                </div>
                <div className="BlogSB1">
                    <div className="BSB1_1">
                       <img className="Blogimg"src="./images/others/foto3.png" alt="Nuestra historia"/>
                    </div> 
                    <div className="BSB1_2">
                       <h4 className="BSB1_2H">Visión:</h4>
                       <p className="BSB1_2P">
                       Facilitar procesos logísticos a pequeñas y medianas empresas a través del mas rápido y eficiente sistema de entrega de paquetes, y a su vez soluciones efectivas para el incremento de sus ventas.
                       </p>
                       <span className="iconHeart">♥</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Blog
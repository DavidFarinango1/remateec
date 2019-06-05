import React, {PureComponent} from 'react';
import './moredescription.css';

class Moredescription extends PureComponent{
    render(){
        return(
        <div>
            <div className="SBtitle2">Mas carácteristicas del producto</div>
            <div className="secundary-box">
                <div className="SBbox d">
                    <div className="SBall-details">
                        {/* <h4 className="SBdetails-title">{this.props.oneproduct.p_title_general_description1}</h4> */}
                        <ul className="SBlist"><li>{this.props.oneproduct.p_details_general_description1}</li>
                            {/* <li>Método de impresión: Cabezal de impresión Epson Micro Piezo </li>
                            <li>Configuración inyectores:                360 Inyectores negro, 59 Inyectores por color </li>
                            <li>Tamaño máximo gota: 	                    3 pl, Con tecnología de gotas de tinta de tamaño variable </li>
                            <li>Tecnología de tinta: 	                Epson Dye Ink</li>
                            <li>Tecnología de tinta: 	                Epson Dye Ink</li>
                            <li>Resolución de impresión:	                5.760 x 1.440 ppp</li>  */}
                        </ul>
                    </div>
                </div>
                <div className="SBbox e">
                    <div className="SBall-details">
                    {/* <h4 className="SBdetails-title">{this.props.oneproduct.p_title_general_description2}</h4> */}
                    <ul className="SBlist"><li>{this.props.oneproduct.p_details_general_description2}</li>
                        {/* <li>Velocidad de impresión ISO/IEC 24734: 	15 páginas/minuto Monocromo, 5,5 páginas/minuto Color</li>
                        <li>Velocidad de impresión: 	                30 páginas/minuto Monocromo (Papel Normal 75 g/m²), 17 páginas/minuto Color (Papel Normal 75 g/m²)</li>                        
                        <li>Tiempo de salida de primera página: 	    Monocromo 8 segundos, Color 16 segundos</li>
                        <li>Colores: 	                            Negro, Cian, Amarillo, Magenta</li> */}
                    </ul>
                    {/* <h4 className="SBdetails-title">{this.props.oneproduct.p_title_general_description3}</h4>
                    <ul className="SBlist"><li>{this.props.oneproduct.p_details_general_description3}</li>
                    </ul> */}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default Moredescription;
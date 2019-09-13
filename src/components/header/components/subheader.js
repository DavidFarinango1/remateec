import React,{Component} from 'react';
import './subheader.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

class Subheader extends Component {
    toStationery=()=>{
        this.props.history.push(ROUTES.STATIONERY)
    }
    toClothes=()=>{
        this.props.history.push(ROUTES.CLOTHES)
    }
    toTech=()=>{
        this.props.history.push(ROUTES.TECH)
    }
    toBlog=()=>{
        this.props.history.push(ROUTES.BLOG)
    }
    render(){
        return(
            <div className="Subheader1">
                <div className="Sh1_1">
                    <li className="nav-item dropdown Sh1_1_1">
                        <a className="nav-link dropdown-toggle DDA" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Todos los productos
                        </a>
                        <div className="dropdown-menu DDMenu" aria-labelledby="navbarDropdownMenuLink">
                        <p onClick={this.toStationery} className="dropdown-item" >Papelería</p>
                        <p onClick={this.toClothes} className="dropdown-item">Ropa</p>
                        <p onClick={this.toTech} className="dropdown-item">Tecnología</p>
                        </div>
                    </li>
                </div>
                <div className="Sh1_2">
                    {/* <Link className='SH1p' to=''> */}
                        <p className='SH1p' onClick={this.toBlog}>
                        Acerca de nosotros
                        </p>
                    {/* </Link> */}
                </div>
                {/* <div className="Sh1_3">
                    <Link className='SH1p' to=''>
                        <p>
                        Contactos
                        </p>
                    </Link>
                </div> */}
                {/* <div className="Sh1_4">
                    <Link className='SH1p' to=''>
                        <p>
                        Ayuda
                        </p>
                    </Link>
                </div> */}
            </div>    
        )
    }
}


export default withRouter(Subheader);
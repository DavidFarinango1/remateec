import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './onedescriptionmodal.css';

class OneDescriptionModal extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            img0: this.props.oneproduct.p_principal_image,
            contador: '',
            first: true
        }
    }
    onClick1=()=>{
        this.setState({
            contador: this.props.oneproduct.p_principal_image,
            first: false,
        })
    }
    onClick2=()=>{
        this.setState({
            contador: this.props.oneproduct.p_secundary_image2,
            first: false,
        })
    }
    onClick3=()=>{
        this.setState({
            contador: this.props.oneproduct.p_secundary_image3,
            first: false,
        })
    }
    onClick4=()=>{
        console.log(this.props)
    }
    render(){
        return(
        <div className="ODM-principal-box">
            <div className="ODM-PBboxa">
                <div className="ODM-PBproduct">{this.props.oneproduct.p_name}</div>
                <div className="ODM-PBprecio"><strong>Precio: $</strong>{this.props.oneproduct.p_price}</div>
                {/* <div><small style={{color:'grey'}}>(Incluido impuestos)</small></div> */}
            </div>
            <div className="ODM-PBboxb">
                <div className="ODM-PBbox1">
                    <img src ={this.props.oneproduct.p_principal_image} onClick={this.onClick1} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.oneproduct.p_secundary_image2} onClick={this.onClick2} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.oneproduct.p_secundary_image3} onClick={this.onClick3} alt="producto" height="40px" weight="40px" />
                </div>
                <div className="ODM-PBbox2">
                {
                    this.state.first? 
                    <div className="aaaaaaaaaa zoom imgzoom2" style={{backgroundImage: `url(${this.props.oneproduct.p_principal_image})`}}></div>
                    :
                    <div className="aaaaaaaaaa zoom imgzoom2" style={{backgroundImage: `url(${this.state.contador})`}}></div>
                }
                    {/* <img src ={this.props.oneproduct.p_principal_image} alt="producto" height="200px" weight="200px" /> */}
                </div>
            </div>
            <div className="ODM-PBboxc">
                <div className="PBdetails-descriptionmodal">{this.props.oneproduct.p_shortdetails}</div>
            </div>
            {/* <div className="ODM-PBboxd">
                <a href={'/product/'+this.props.idData.id}>
                 <p onClick={this.onClick4}>{this.props.idData.id}</p>
                <button class="btn btn-outline-success">Ver más detalles y promociones</button>

                </a>
            </div> */}
        </div>
        )
    }
}


export default OneDescriptionModal;
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './onedescriptionmodal.css';

class OneDescriptionModal extends PureComponent{
    render(){
        return(
        <div className="ODM-principal-box">
            <div className="ODM-PBboxa">
                <div className="ODM-PBproduct">{this.props.oneproduct.p_name}</div>
                <div className="ODM-PBprecio"><strong>USD: </strong>{this.props.oneproduct.p_price}</div>
            </div>
            <div className="ODM-PBboxb">
                <div className="ODM-PBbox1">
                    <img src ={this.props.oneproduct.p_principal_image} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.oneproduct.p_secundary_image2} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.oneproduct.p_secundary_image3} alt="producto" height="40px" weight="40px" />
                </div>
                <div className="ODM-PBbox2">
                    <img src ={this.props.oneproduct.p_principal_image} alt="producto" height="200px" weight="200px" />
                </div>
            </div>
            <div className="ODM-PBboxc">
                <div className="PBdetails-description">{this.props.oneproduct.p_shortdetails}</div>
            </div>
        </div>
        )
    }
}


export default OneDescriptionModal;
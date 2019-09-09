import React, {Component} from 'react';
import ReactImageZoom from 'react-image-zoom'
import {Link} from 'react-router-dom';
import './onedescription.css';
// const imagesPath = {
//     minus: this.props.proddetails.data.p_principal_image,
//     plus: this.props.proddetails.data.p_secundary_image2
//   }
// const props = {width: 400, height: 250, zoomWidth: 500};    

class Onedescription extends Component{
    constructor(props){
        super(props);
        this.state={
            img0: this.props.proddetails.data.p_principal_image,
            contador: '',
            first: true
        }
    }
    // componentDidMount(){
    //     this.listener7 = this.setState({
    //         contador: this.props.proddetails.data.p_principal_image,
            
    //     })
    // }
    onClick1=()=>{
        this.setState({
            contador: this.props.proddetails.data.p_principal_image,
            first: false,
        })
        console.log('1')
    }
    // componentWillUnmount(){
    //     this.listener7()
    // }
    onClick2=()=>{
        this.setState({
            contador: this.props.proddetails.data.p_secundary_image2,
            first: false,
        })
        console.log('2')
    }
    onClick3=()=>{
        this.setState({
            contador: this.props.proddetails.data.p_secundary_image3,
            first: false,
        })
        console.log('3')
    }
    render(){
        return(
            <div className="principal-box">
            <div className="PBbox a">
                <div className="PBdetails-title">Detalles del producto:</div>
                <div className="PBdetails-description">{this.props.proddetails.data.p_shortdetails}</div>
            </div>
            <div className="PBbox b">
                <div className="PBproduct prueba">{this.props.proddetails.data.p_name}</div>
                <div className="PBbox1">
                    <img src ={this.props.proddetails.data.p_principal_image}  onClick={this.onClick1} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.proddetails.data.p_secundary_image2} onClick={this.onClick2} alt="producto" height="40px" weight="40px" />
                    <img src ={this.props.proddetails.data.p_secundary_image3} onClick={this.onClick3} alt="producto" height="40px" weight="40px" />
                </div>
                <div className="slide-box2 PBbox2">
                    {/* <ReactImageZoom {...props}  img={"/images/users/usuario.png"} /> */}
                    {/* <ReactImageZoom {...props} div={{backgroundImage: `url(${this.props.proddetails.data.p_principal_image})`}}  /> */}
                    {
                        this.state.first? 
                        <div className="aaaaaaaaaa zoom" style={{backgroundImage: `url(${this.props.proddetails.data.p_principal_image})`}}></div>
                        :
                        <div className="aaaaaaaaaa zoom" style={{backgroundImage: `url(${this.state.contador})`}}></div>
                    }
                </div>
            </div>
            <div className="PBbox c">
                <div className="PBproduct prueba2">{this.props.proddetails.data.p_name}</div>
                <div className="PBprecio"><strong>USD: </strong>{this.props.proddetails.data.p_price}</div>
                {/* <div className="PBoferta"><strong>-Por la compra de:</strong>{this.props.proddetails.data.get('offer')}</div> */}
                <div className="PBvendido-por" onClick={console.log(this.props.proddetails.data)}><strong>-Vendido por:<br /></strong>{this.props.proddetails.data.p_mybussinessname}</div>
                <div className="PBenviado-por"><strong>-Enviado por:</strong><br />{this.props.proddetails.data.p_logistic_seller}</div>
                <div className="PBformas de pago"><strong>-Formas de pago:</strong> <br />Pago al momento de la entrega</div>
                {/* <Link to='/ShoppingCart/Logged'> */}
                <div className="PBbutton-sell">
                    <button 
                    // className="PBventa"
                    type="button" className="btn btn-outline-primary"
                    onClick={() => this.props.handleOnAddUnit(this.props.proddetails)}
                    >
                    Agregar al carrito
                    </button>
                </div>
                {/* </Link> */}
            </div>
        </div>
        )
    }
}


export default Onedescription;
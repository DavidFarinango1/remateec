import React, {Component} from 'react'
import './school.css'
import { withFirebase } from '../../../Firebase';
import UploadForm from './uploadform';
import SchoolContainer from '../container/school_container';
class School extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue_name_school: '',
            inputValue_cellphone_school: '',
            inputValue_adress_school: '',
            inputValue_gender_school: '',
            inputValue_type_school: '',
            inputValue_shortdetails_school: '',
            id: '',
            authUser: null,
            uploadValue0: 0,
            picture0: './images/others/signomas.png',
        };
    }
    handleUpload0=(event)=>{
        var num = Math.random();
        const useruid = this.props.firebase.auth.currentUser.uid
        const file =  event.target.files[0]
        const storageRef = this.props.firebase.dothisStorage().ref(`/products/${useruid}/${num+file.name}`)
        const task = storageRef.put(file);

        task.on('state_changed', snapshot =>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)* 100;
            this.setState({
                uploadValue0: percentage
            })
        }, error =>{
            console.log(error.message)
        }, ()=>{ 
            storageRef.getDownloadURL().then(url=>{
                this.setState({
                    picture0: url,
                })
            })
        })
    }
    onChange = event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    action = event =>{
        const { 
            inputValue_name_school,
            inputValue_cellphone_school,
            inputValue_adress_school,
            inputValue_gender_school,
            inputValue_type_school,
            inputValue_shortdetails_school,
            picture0,
            } = this.state;
            event.preventDefault();
            this.props.firebase
                .dothisdb()
                .collection('school')
                .add({
                    date: new Date(),
                    s_name_school: inputValue_name_school,
                    s_cellphone_school :inputValue_cellphone_school,
                    s_adress_school :inputValue_adress_school,
                    s_gender_school: inputValue_gender_school,
                    s_type_school :inputValue_type_school,
                    s_shortdetails_school :inputValue_shortdetails_school,
                    s_principal_image: picture0,
                })
                .then(()=>{
                    console.log(`Lista de: ${inputValue_name_school} cuyo teléfono es: ${inputValue_cellphone_school} agregado`)
                    this.setState({
                        inputValue_name_school: '',
                        inputValue_cellphone_school: '',
                        inputValue_adress_school: '',
                        inputValue_gender_school: '',
                        inputValue_type_school: '',
                        inputValue_shortdetails_school: '',
                        picture0: null,
                        uploadValue0: 0,
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
    }
      routeChange() {
        window.location.assign('https://web.whatsapp.com/')
      }
    render(){
        return(        
            <div>
                <div className="School-principal">
                    <div className="School-card1">
                        <div className="card mb-3 card1_1">
                            <div className="row no-gutters">
                                <div className="col-md-4 school-whap-img">
                                {/* <!-- Button trigger modal --> */}
                                {/* <a href="https://www.freepik.es/fotos-vectores-gratis/icono">Vector de Icono creado por freepik - www.freepik.es</a> */}
                                    <img src="/images/social/Click_Aqui.png" data-toggle="modal" data-target="#exampleModalCenter" className="card-img" alt="..." />
                                {/* <!-- Modal --> */}
                                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    {/* <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5> */}
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    Enviar mensaje al +593996114197
                                                </div>
                                                <div className="modal-footer">
                                                    <button 
                                                    onClick={this.routeChange} 
                                                    type="button" className="btn btn-primary">
                                                        Enviar mensaje
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 ">
                                    <div className="card-body">
                                        <h5 className="card-title">Envíanos tu lista por Whatsapp.</h5>
                                        <p className="card-text">Simple y sencillo, nuestros asesores de ventas responderan lo mas pronto posible.</p>
                                        <p className="card-text"><small className="text-muted">Si tu lista supera los $20,00 te la enviamos totalmente gratis.</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 style={{'textAlign': 'center'}}>Ó</h2>
                    </div>
                    <div className="School-card2">
                        <div className="card mb-3 card1_2">
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">También puedes llenar el siguiente formulario:</h5>
                                        <p className="card-text">Realizamos entregas por el momento solamente en la ciudad de Quito, esperamos crecer muy pronto para poder brindarles un mejor servicio.</p>
                                        <p className="card-text"><small className="text-muted">Si tu lista supera los $20,00 te la enviamos totalmente gratis.</small></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <UploadForm 
                                    createProduct={this.action}
                                    state={this.state}
                                    uploadValue={this.state.uploadValue0}
                                    handleUpload={this.handleUpload0}
                                    picture = {this.state.picture0}
                                    onActionChange = {this.onChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withFirebase(School);
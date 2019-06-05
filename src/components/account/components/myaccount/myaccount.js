import React, { Component } from 'react'
import { withFirebase } from '../../../../Firebase'
import './myaccount.css'

class Myaccount extends Component {
        constructor(props){
        super(props);
        this.state ={
            authUser: null,
            name: '',
            email: '',
            cellphone: 'Registra tu número de celular para una mejor atención y soporte.',
            password: '********',
            address:  'Todavía no tienes registrada tu dirección, registrala ahora.',
            mycell: '',
            mygps: '',
            edit2: false,
        }
    }
    componentDidMount(){
        this.listener3 = this.props.firebase.auth.onAuthStateChanged(authUser =>{
            authUser
            ? this.setState({ 
                            authUser, 
                            name: authUser.displayName,  
                            email: authUser.email, 
                           })
            : this.setState({ authUser:null});
            console.log(authUser)
        })
        this.listener4 = this.props.firebase.auth.onAuthStateChanged((authUser)=>{
            authUser
            ?
            this.props.firebase
                .dothisdb()
                .collection('users')
                .where('u_email', '==', authUser.email)
                .onSnapshot( snapShot=>{
                    let result = snapShot.docChanges()
                        this.setState({
                            mycell: result.map((user)=>{
                                    return user.doc.data().u_cell
                                })
                            ,
                            mygps: result.map((user)=>{
                                    return user.doc.data().u_gps
                                })
                            ,
                        })
                    // })
                },error=>{
                    console.log(error)
                })
            :
            console.log('error')
        })
    }
    componentWillUnmount(){
        this.listener3();
        // this.listener4();
    }
onActionChangeReal= event =>{
    this.setState({
        [event.target.name]: event.target.value
    })
}
createUser = event =>{
    const {
        name,
        email,
        mycell,
        mygps,
        edit2,
    }= this.state
    event.preventDefault()
    const user = this.props.firebase.auth.currentUser
    console.log(user.uid)
    const id = user.uid
    !edit2?
    this.props.firebase
        .dothisdb()
        .collection('users')
        .doc(id)
        .set({
            u_name: name,
            u_email: email,
            u_cell: mycell,
            u_gps: mygps,
        })
        .then(()=>{
            console.log('usuario creado')
            alert('Bienvenido Weyger, tu usuario a sido creado con éxito')
            this.setState({
                edit2: true,
            })
        })
        .catch((error)=>{
            console.log(error)
        })
        :this.update2();

}
update2=()=>{
    const {
        mycell,
        mygps,
    }= this.state;
    const id = this.props.firebase.auth.currentUser.uid
    this.props.firebase
        .dothisdb()
        .collection('users')
        .doc(id)
        .update({
            u_cell: mycell,
            u_gps: mygps,
        })
        .then(()=>{
            console.log('usuario actualizado')
            alert('Usuario actualizado con éxito')
        })
        .catch((error)=>{
            console.log('el error es :'+ error)
        })
}
    render(){
        const {
            mycell,
            mygps,
         } = this.state; 
        return(
            <div className="MyaccountBOX">
                <form id="formularioSB" onSubmit = {this.createUser}>
                    <h1>Mi cuenta</h1>
                    <h4>Nombre:</h4>
                    <p>{this.state.name}</p>
                    <h4>Correo:</h4>
                    <p>{this.state.email}</p>
                    <div >
                        <h4>Mi número de teléfono:</h4>
                        <input className="myaccinput1 form-control mr-sm-8" name="mycell" value={mycell} type="text" onChange={this.onActionChangeReal} maxLength="15" data-length="15" required></input>
                    </div>
                    <div >
                        <h4>Mi dirección de entrega, para las compras realizadas:</h4>
                        <input className="myaccinput2 form-control mr-sm-8" name="mygps" value={mygps} type="text" onChange={this.onActionChangeReal}  maxLength="200" data-length="200" required></input>
                    </div>
                    <div className="btnFinal">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >
                            {this.state.edit2? 'Editar información' : 'Editar información'}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withFirebase(Myaccount)
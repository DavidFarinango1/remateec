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
            mybussinessname: '',
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
                                }).toString()
                            ,
                            mygps: result.map((user)=>{
                                    return user.doc.data().u_gps
                                }).toString()
                            ,
                            mybussinessname: result.map((user)=>{
                                return user.doc.data().u_mybussinessname
                            }).toString()
                        })
                },error=>{
                    console.log(error)
                })
            :
            console.log('error')
        })
    }
    componentWillUnmount(){
        this.listener3();
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
        mybussinessname,
        mycell,
        mygps,
        edit2,
    }= this.state
    event.preventDefault()
    const user = this.props.firebase.auth.currentUser
    const id = user.uid
    !edit2?
    this.props.firebase
        .dothisdb()
        .collection('users')
        .doc(id)
        .set({
            u_name: name,
            u_email: email,
            u_mybussinessname: mybussinessname,
            u_cell: mycell,
            u_gps: mygps,
        })
        .then(()=>{
            alert('Bienvenido Weyger, tu usuario a sido creado con éxito')
            this.setState({
                edit2: true,
            })
        })
        .catch((error)=>{
            alert(error)
        })
        :this.update2();

}
update2=()=>{
    const {
        mybussinessname,
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
            u_mybussinessname: mybussinessname,
        })
        .then(()=>{
            alert('Usuario actualizado con éxito')
        })
        .catch((error)=>{
            alert('el error es :'+ error)
        })
}
    render(){
        const {
            mybussinessname,
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
                    <div>
                        <h4>Nombre de la empresa:</h4>
                        <input className="myaccinput1 form-control mr-sm-8" name="mybussinessname" value={mybussinessname} type="text" onChange={this.onActionChangeReal}  maxLength="200" data-length="200" required></input>
                    </div>
                    <div >
                        <h4>Mi número de teléfono:</h4>
                        <input className="myaccinput1 form-control mr-sm-8" name="mycell" value={mycell} type="text" onChange={this.onActionChangeReal} maxLength="15" data-length="15" required></input>
                    </div>
                    <div>
                        <h4>Mi dirección, para las compras realizadas y para sus ventas:</h4>
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
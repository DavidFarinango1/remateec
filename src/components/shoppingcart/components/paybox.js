import React, { Component } from 'react'
import { withFirebase } from '../../../Firebase'

class PayBox extends Component{
    // constructor(props){

    //     super(props);
    //     this.state={
    //         // user2: [],
    //         authUser: null,
    //         name: '',
    //         email: '',
    //         mybussinessname: '',
    //         mycell: '',
    //         mygps: '',
    //         edit2: false,
    //     }
    // }
    componentDidMount(){
        // this.listener9 = this.props.firebase.auth.onAuthStateChanged(authUser =>{
        //     authUser
        //     ? this.setState({ 
        //                     authUser, 
        //                     name: authUser.displayName,  
        //                     email: authUser.email, 
        //                    })
        //     : this.setState({ authUser:null});
        // })
        // this.listener10 = this.props.firebase.auth.onAuthStateChanged((authUser)=>{
        //     authUser
        //     ?
        //     this.props.firebase
        //         .dothisdb()
        //         .collection('users')
        //         .where('u_email', '==', authUser.email)
        //         .onSnapshot((snapShot)=>{
        //             // let userResult = snapShot.docChanges()
        //             //     this.setState({
        //             //         user2: userResult.map((user2)=>{
        //             //             return user2.doc.data()
        //             //         }),
        //             //     })
        //             this.setState({
        //                 user2: snapShot.docs.map((doc)=>{
        //                     return {id: doc.id, data: doc.data()}
        //                 })
        //             })
                    
        //         },error=>{
        //             console.log(error)
        //         })
        //     :
        //     console.log('error al consultar el usuario')
        // })
        // console.log(this.state.user)
        // this.listener10 = this.props.firebase.auth.onAuthStateChanged((authUser)=>{
        //     authUser
        //     ?
        //     this.props.firebase
        //         .dothisdb()
        //         .collection('users')
        //         .where('u_email', '==', authUser.email)
        //         .onSnapshot( snapShot=>{
        //             let result = snapShot.docChanges()
        //                 this.setState({
        //                     mycell: result.map((user)=>{
        //                             return user.doc.data().u_cell
        //                         }).toString()
        //                     ,
        //                     mygps: result.map((user)=>{
        //                             return user.doc.data().u_gps
        //                         }).toString()
        //                     ,
        //                     mybussinessname: result.map((user)=>{
        //                         return user.doc.data().u_mybussinessname
        //                     }).toString()
        //                 })
        //             // })
        //         },error=>{
        //             console.log(error)
        //         })
        //     :
        //     console.log('error')
        // })
    }
    componentWillUnmount(){
        // this.listener9();
    }
    onAction2Change=event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // createUserFirst = event =>{
    //     const {
    //         name,
    //         email,
    //         mybussinessname,
    //         mycell,
    //         mygps,
    //         edit2,
    //     }= this.state
    //     event.preventDefault()
    //     const user = this.props.firebase.auth.currentUser
    //     // console.log(user.uid)
    //     const id = user.uid
    //     !edit2?
    //     this.props.firebase
    //         .dothisdb()
    //         .collection('users')
    //         .doc(id)
    //         .set({
    //             u_name: name,
    //             u_email: email,
    //             u_mybussinessname: mybussinessname,
    //             u_cell: mycell,
    //             u_gps: mygps,
    //         })
    //         .then(()=>{
    //             // console.log('usuario creado')
    //             alert('Bienvenido Weyger, tu usuario a sido creado con éxito')
    //             this.setState({
    //                 edit2: true,
    //             })
    //         })
    //         .catch((error)=>{
    //             alert(error)
    //         })
    //         :this.update3();
    
    // }
//     update3=()=>{
//     const {
//         mybussinessname,
//         mycell,
//         mygps,
//     }= this.state;
//     const id = this.props.firebase.auth.currentUser.uid
//     this.props.firebase
//         .dothisdb()
//         .collection('users')
//         .doc(id)
//         .update({
//             u_cell: mycell,
//             u_gps: mygps,
//             u_mybussinessname: mybussinessname,
//         })
//         .then(()=>{
//             // console.log('usuario actualizado')
//             alert('Usuario actualizado con éxito')
//         })
//         .catch((error)=>{
//             alert('el error es :'+ error)
//         })
// }
    // datosF=event=>{
    //     event.preventDefault()
    //     console.log(this.state.user2)
    // }
    render(){
        // const {
        //     mybussinessname,
        //     mycell,
        //     mygps,
        //  } = this.state; 
        return(
            <div>
                <div>
                    <h5 onClick={this.datosF}>Datos para la factura</h5>
                    <h4>Nombre:</h4>
                    <p>{this.props.dataOrder.name}</p>
                    <h4>Correo:</h4>
                    <p>{this.props.dataOrder.email}</p>
                    <div>
                        <h4>Nombre de la empresa:</h4>
                        <input className="myaccinput1 form-control mr-sm-8" name="mybussinessname" value={this.props.dataOrder.mybussinessname} type="text" onChange={this.props.onActionChange2}  maxLength="200" data-length="200" required></input>
                    </div>
                    <div >
                        <h4>Mi número de teléfono:</h4>
                        <input className="myaccinput1 form-control mr-sm-8" name="mycell" value={this.props.dataOrder.mycell} type="text" onChange={this.props.onActionChange2} maxLength="15" data-length="15" required></input>
                    </div>
                    <div>
                        <h4>Mi dirección, para las compras realizadas y para sus ventas:</h4>
                        <input className="myaccinput2 form-control mr-sm-8" name="mygps" value={this.props.dataOrder.mygps} type="text" onChange={this.props.onActionChange2}  maxLength="200" data-length="200" required></input>
                    </div>
                    <div className="btnFinal">
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >
                            {this.props.dataOrder.edit3? 'Editar información' : 'Editar información'}
                        </button> */}
                    </div>
                    
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">Efectivo</label>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                </div>
                <button type="submit">Siguiente</button>
            </div>
        )
    }
}
export default withFirebase(PayBox);
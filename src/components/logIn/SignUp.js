import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './signup.css'
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../constants/routes';
// import '../LogIn/components/generallogin.css';
const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE};
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser =>{  
            this.setState({...INITIAL_STATE});
            authUser.user.updateProfile({
              displayName: username,
            })
            const configuracion ={
              url: 'https://www.ventasquito.com/'
            }
            
            authUser.user.sendEmailVerification(configuracion).catch(error=>{
              console.log(error+'no vale el intento')
            })
            this.props.firebase.doSignOut()
            alert('Bienvenido Weyger, por favor realiza el proceso de verificacion en tu correo')
            this.props.history.push(ROUTES.HOME);
            console.log('1='+authUser.user.uid)
            // const useruid = authUser.user.uid
            // this.props.firebase
            //   .dothisdb()
            //   .collection('users')
            //   .doc(useruid)
            //   .set({

            //   // })
            //   // .collection('users')
            //   // .add({
            //     u_name : username,
            //     u_email : email,
            //   })
            //   .then((docRef)=>{
            //     console.log('usuario agregado correctamente UID es: 2='+ docRef.id )
            //   })
            //   .catch((error)=>{
            //     console.log(error)
            //   })
              event.preventDefault();
        })
        .catch(error => {
            console.log(error +'al crear el usuario')
        });
      event.preventDefault()
      // this.props.firebase
      //   .dothisdb()
      //   .doc(useruid)
      //   .set({

      //   // })
      //   // .collection('users')
      //   // .add({
      //     u_name : username,
      //     u_email : email,
      //   })
      //   .then((docRef)=>{
      //     console.log('usuario agregado correctamente UID es: '+ docRef.id )
      //   })
      //   .catch((error)=>{
      //     console.log(error)
      //   })
      //   event.preventDefault();
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
    } = this.state; 

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

    return (
      <div className="SUP">
        <div className="SUPregister">
          <div className = "SUPLIheader">
              <img src= "./images/weygo/logo.PNG" height="66px"></img>
              <h1>Weygo</h1>
          </div>
          <form id="formulariot" onSubmit={this.onSubmit}>
            <div className="LIinfo">
              <h2 className="SUPLIprincipal">Crear Cuenta</h2>
              <h5>Nombre:</h5>
              <input
              className="form-control mr-sm-8"
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Nombre completo"
              />
              <h5 >Correo:</h5>
              <input
              className="form-control mr-sm-8"
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Dirección de correo"
              />
              <h5 >Contraseña:</h5>
              <input
              className="form-control mr-sm-8"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Contraseña"
              />
              <h5 >Confirmar contraseña:</h5>
              <input
              className="form-control mr-sm-8"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirmar contraseña"
              />
              <button className="btn my-2 my-sm-0" disabled={isInvalid} type="submit">
                Crear tu cuenta Weyger :D
              </button>

              {error && <p>{error.message}</p>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Todavía no tienes una cuenta? <Link to={ROUTES.SIGN_UP}>Registrate ahora!</Link>
  </p>
);
const SignUpForm = compose(
    withRouter,
    withFirebase,
    )(SignUpFormBase);

// Cualquier componente que vaya en el withRouter()componente de orden superior obtiene 
// acceso a todas las propiedades del enrutador, por lo que al pasar el componente 
// SignUpFormBase mejorado al componente withRouter()de orden superior, tiene acceso a 
// los accesorios del enrutador. La propiedad relevante de los accesorios del enrutador
// es el historyobjeto, ya que nos permite redirigir a un usuario a otra página 
// presionando una ruta hacia él.

export default SignUpPage;

export { SignUpForm, SignUpLink };
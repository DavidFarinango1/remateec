import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './signup.css'
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../constants/routes';
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
        .doCreateUserWithEmailAndPassword(email.trim(), passwordOne)
        .then(authUser =>{  
            this.setState({...INITIAL_STATE});
            authUser.user.updateProfile({
              displayName: username,
            })
            const configuracion ={
              url: 'remateec.com'
            }
            
            authUser.user.sendEmailVerification(configuracion).catch(error=>{
              this.setState({error})
            })
            this.props.firebase.doSignOut()
            alert('Bienvenido a Remateec.com, por favor realiza el proceso de verificacion en tu correo electrónico para poder empezar')
            this.props.history.push(ROUTES.HOME);
            console.log('1='+authUser.user.uid)
              event.preventDefault();
        })
        .catch(error => {
            this.setState({error})
        });
      event.preventDefault()
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
              <img src= "/images/weygo/R.jpg" height="66px"></img>
              <h1>Remateec</h1>
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
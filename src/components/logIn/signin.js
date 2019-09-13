import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget.js';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../constants/routes';
import './signin.css'

// import { connect } from 'react-redux'
// import * as actions from '../actions/index.js';
// import { bindActionCreators } from 'redux';

const SignInPage = () => (
    <div className="SIP">
        <SignInForm />
        {/* <div className="SIP2">
        <PasswordForgetLink/>
        <SignUpLink />
        </div> */}
    </div>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component{
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }
    onSubmit = event =>{
        const {email, password} = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email.trim(), password)
            .then((authUser)=>{
                if(authUser.user.emailVerified){
                    this.setState({ ...INITIAL_STATE });
                    this.props.history.push(ROUTES.HOME);
                    alert('Bienvenido a Ventasquito.com')
                }else{
                    this.props.firebase.doSignOut();
                    alert('Por favor realiza el proceso de verificación de la cuenta')
                    this.props.history.push(ROUTES.HOME);
                }
            })
            .catch(error => {
                this.setState({error});
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({[event.target.name]: event.target.value });
    };
    onClickGoogle = (event) => {
        this.props.firebase
            .doSignInWithGoogle()
            .then((result)=>{
                console.log(result)
                this.props.history.push(ROUTES.HOME);
                alert(`Bienvenido ${result.user.displayName}`)
                this.props.actions.signGoogle(result);
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    onClickFacebook = event => {
        this.props.firebase
            .doSignInWithFacebook(), ()=>{
                
                this.props.firebase
                    .doSignInWithFacebookRedirect()
                    .then((result)=>{
                if (result.credential) {
                console.log(result)
                        this.props.history.push(ROUTES.HOME);
                        alert(`Bienvenido ${result.user.displayName}`)
                }
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }
    }
    render(){
        const {email, password, error} = this.state;
        const isInvalid = password === '' || email === '';

        return(
            <div className= "SIP1">
                <div className = "SIP1header">
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src= "./images/weygo/logo.PNG" height="66px"></img>
                        <h1>Ventasquito</h1>
                    </div>
                {/* </div>
                <div className="SIP1info"> */}
                    <form onSubmit = {this.onSubmit}>
                    <h2 className="LItitleprincipal">Iniciar Sesión</h2>
                    <h5 className="LItitle">Correo Electrónico:</h5>
                    <input 
                    className="form-control mr-sm-8"
                    name= "email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Dirección de correo"
                    />
                    <h5 className="LItitle" >Contraseña:</h5>
                    <input
                    className="form-control mr-sm-8"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Contraseña"
                    />
                    <button className="btn my-2 my-sm-0" disabled={isInvalid} type="submit">
                    Iniciar Sesión
                    </button>
                    {error && <p>{error.message}</p>} 
                    </form>
                    <div className="SIP2">
                        <PasswordForgetLink/>
                        <SignUpLink />
                    </div>
                    {/* <h3>También puedes iniciar sesión con:</h3> */}
                    <section className="signinsocial">
                    </section>
                    <p className='SignIn_problems' >Si tienes algún problema para ingresar o registrarte, por favor escribenos al whatsapp +593 996114197 o al correo weygo.ceo@gmail.com</p>
                </div>               
            </div>
        );
    }
}
const SignInForm = compose (
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage

export { SignInForm };
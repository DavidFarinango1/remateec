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
            .doSignInWithEmailAndPassword(email, password)
            .then((authUser)=>{
                if(authUser.user.emailVerified){
                    this.setState({ ...INITIAL_STATE });
                    this.props.history.push(ROUTES.HOME);
                    alert('Bienvenido a Weygo')
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
            // .then(function(result) {
            //     if (result.credential) {
            //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            //       var token = result.credential.accessToken;
            //       // ...
            //     }
            //     // The signed-in user info.
            //     var user = result.user;
            //     console.log(user)
            //   }).catch(function(error) {
            //     // Handle Errors here.
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     // The email of the user's account used.
            //     var email = error.email;
            //     // The firebase.auth.AuthCredential type that was used.
            //     var credential = error.credential;
            //     console.log(errorCode)
            //     // ...
            //   });

    }
    render(){
        const {email, password, error} = this.state;
        const isInvalid = password === '' || email === '';

        return(
            <div className= "SIP1">
                <div className = "SIP1header">
                    <img src= "./images/weygo/logo.png" height="66px"></img>
                    <h1>Weygo</h1>
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
                        {/* <img onClick={this.onClickFacebook} src= "./images/social/facebook_icon.png" alt = "facebook" width="30px"/> */}
                        {/* <img onClick={this.onClickGoogle} src= "./images/social/google_icon.png" alt = "google" width="30px"/> */}
                        {/* <img src= "./images/social/twitter.png" alt = "twitter" width="30px"/> */}
                    </section>
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
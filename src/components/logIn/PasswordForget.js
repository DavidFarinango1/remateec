import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../../Firebase';
import * as ROUTES from '../constants/routes';

import './pw-forget.css'

const PasswordForgetPage = ()=> (
    <div>
        <PasswordForgetForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super (props);
        this.state = { ...INITIAL_STATE};
    }
    onSubmit = event => {
        const {email} = this.state;
        this.props.firebase
            .doPasswordReset(email)
            .then(()=>{
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render(){
        const {email, error} = this.state;
        const isInvalid = email === '';

        return(
            <div className="PWFORGET">
                <div className="PWFORGETFORM">
                    <div className = "PWFORGETheader">
                        <img src= "./images/weygo/logo.png" height="66px"></img>
                        <h1>Weygo</h1>
                    </div>
                    <form onSubmit={this.onSubmit}>
                    <input
                    className="form-control mr-sm-8"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Dirección de correo"
                    />
                    <small className="form-text text-muted" style={{width: 200+'px'}}>Ingresa el correo electrónico para enviarte un formulario de cambio de clave a tu correo</small>
                    <button className="btn my-2 my-sm-0" disabled={isInvalid} type="submit">
                        Cambiar de contraseña
                    </button>

                    {error && <p>{error.message}</p>}
                    </form>
                </div>
            </div>
        );
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>¡Has olvidado tu contraseña?</Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink};
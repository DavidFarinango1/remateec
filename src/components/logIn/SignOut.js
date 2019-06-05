import React from 'react';
import { Link } from 'react-router-dom'
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../constants/routes.js';
import './signout.css'

const SignOutButton = ({ firebase }) => (

  <Link 
  to=''
  // to={ROUTES.LANDING}
  >
    <button className="buttonSOut btn btn-outline-success my-2 my-sm-0" type="button" onClick={firebase.doSignOut}>
      Cerrar sesión
    </button>
  </Link>
);

export default withFirebase(SignOutButton);
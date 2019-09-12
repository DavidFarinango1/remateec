import React from 'react';
import './navigation.css'
import NavigationAuth from './auth';
import NavigationNonAuth from './nonauth';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth />:<NavigationNonAuth /> }</div>
  )
export default Navigation;
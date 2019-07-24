import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Map as map} from 'immutable';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import Home from './components/page/container/home'
import SellerPrincipal from './components/account/container/sellerprincipal'
import MyShopCartContainer from './components/account/container/myshopcartcontainer'
import MyProductsContainer from './components/account/container/myproductscontainer'
import MyPurchaseContainer from './components/account/container/mypurchasecontainer'
import MyCommentsContainer from './components/account/container/mycommentscontainer'
import Prod from './components/products/container/descriptioncontainer'
import SignUpPage from './components/logIn/SignUp';
import SignInPage from './components/logIn/signin';
import PasswordForgetPage from './components/logIn/PasswordForget';
import ShoppingCart from './components/shoppingcart/container/shoppingcart-container'
import ShoppingCartLogged from './components/shoppingcart/container/shoppingcartlogged-container'

import * as ROUTES from './components/constants/routes'

import reducer from './store/reducers/index';

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(logger)
    )
);

class App extends Component {
    render(){
        return(
        <BrowserRouter>
            {/* <Provider store={store}> */}
                <div>
                  <Route exact path={ROUTES.HOME} component={Home} />
                  
                  <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                  <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                  <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />

                  <Route exact path={ROUTES.MYACCOUNT} component={SellerPrincipal} />
                  <Route exact path={ROUTES.MYPRODUCTS} component={MyProductsContainer} />
                  <Route exact path={ROUTES.MYSHOPCART} component={MyShopCartContainer} />
                  <Route exact path={ROUTES.MYPURCHASE} component={MyPurchaseContainer} />
                  <Route exact path={ROUTES.MYCOMMENTS} component={MyCommentsContainer} />
                  <Route exact path='/product/:id' component={Prod} />

                  <Route path={ROUTES.SHOPPINGCART} component={ShoppingCart} />
                  <Route exact path={ROUTES.SHOPPINGCARTLOGGED} component={ShoppingCartLogged} />

                </div>
            {/* </Provider> */}
        </BrowserRouter>
        );
    }
}

export default App;
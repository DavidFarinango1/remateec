import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {Map as map} from 'immutable';

import Home from './components/page/container/home'
import SearchPage from './components/search/container/searchpage'
import SellerPrincipal from './components/account/container/sellerprincipal'
import MyShopCartContainer from './components/account/container/myshopcartcontainer'
import MyProductsContainer from './components/account/container/myproductscontainer'
import MyPurchaseContainer from './components/account/container/mypurchasecontainer'
import MyCommentsContainer from './components/account/container/mycommentscontainer'
import SchoolContainer from './components/school/container/school_container'
import StationeryContainer from './components/pages_products/container/stationery_container'
import ClothesContainer from './components/pages_products/container/clothes_container'
import TechContainer from './components/pages_products/container/tech_container'
import BlogContainer from './components/blog/container/blog_container'
import ContactContainer from './components/contacts/container/contact_container'

import Prod from './components/products/container/descriptioncontainer'
import SignUpPage from './components/logIn/SignUp';
import SignInPage from './components/logIn/signin';
import PasswordForgetPage from './components/logIn/PasswordForget';
import Privacity from './components/privacity/container/privacitycontainer'
import Terms from './components/privacity/container/termscontainer'
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
                  <Route path={ROUTES.PRIVACITY} component={Privacity} />
                  <Route path={ROUTES.TERMSANDCONDITIONS} component={Terms} />

                  <Route exact path={ROUTES.MYACCOUNT} component={SellerPrincipal} />
                  <Route exact path={ROUTES.MYPRODUCTS} component={MyProductsContainer} />
                  <Route exact path={ROUTES.MYSHOPCART} component={MyShopCartContainer} />
                  <Route exact path={ROUTES.MYPURCHASE} component={MyPurchaseContainer} />
                  <Route exact path={ROUTES.MYCOMMENTS} component={MyCommentsContainer} />
                  <Route exact path={ROUTES.SCHOOL} component={SchoolContainer} />
                  <Route exact path={ROUTES.STATIONERY} component={StationeryContainer} />
                  <Route exact path={ROUTES.CLOTHES} component={ClothesContainer} />
                  <Route exact path={ROUTES.TECH} component={TechContainer} />
                  <Route exact path={ROUTES.BLOG} component={BlogContainer} />
                  <Route exact path={ROUTES.CONTACTOS} component={ContactContainer} />

                  <Route exact path='/product/:id' component={Prod} />
                  <Route exact path='/search/:id' component={SearchPage} />

                  <Route path={ROUTES.SHOPPINGCART} component={ShoppingCart} />
                  <Route exact path={ROUTES.SHOPPINGCARTLOGGED} component={ShoppingCartLogged} />

                </div>
            {/* </Provider> */}
        </BrowserRouter>
        );
    }
}

export default App;
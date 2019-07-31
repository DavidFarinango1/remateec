import searchProduct from './data.js';
import addToCart from './cart.js';
// import { combineReducers } from 'redux'; >>> ya no lo utilizaremos puesto q necesitamos los datos immutables
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
    addToCart,
    searchProduct,
})

export default rootReducer
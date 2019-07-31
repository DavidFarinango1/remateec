import {
  ADD_TO_CART,
  SEARCH_PRODUCT,
  REDUCE_TO_CART,
  INCREASE_PROD,
  DECREASE_PROD,
  UPDATE_ITEM_UNITS,
  DELETE_FROM_CART
} from '../action-types/index';
// son funciones que regresan acciones
export function searchProduct(value) {
  return {
    type: SEARCH_PRODUCT,
    payload: {
      value
    }
  }
}
export function increaseProd(counter){
  return{
    type: INCREASE_PROD,
    payload:{
      counter
    }
  }
}
export function decreaseProd(counter){
  return{
    type: DECREASE_PROD,
    payload:{
      counter
    }
  }
}
export function addToCart({id, data}){
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      name: data.p_name,
      principal_image: data.p_principal_image,
      price: data.p_price,
      cell: data.p_mycell,
      bName: data.p_mybussinessname,
      email: data.autor_email,
      units: 1
    }
  }
}
export function reduceToCart({id, name, principal_image, price, units}){
  return {
    type: REDUCE_TO_CART,
    payload: {
      id,
      name,
      principal_image,
      price,
      units: 1
    }
  }
}
export function updateItemUnits({id, units}) {
  return {
      type: UPDATE_ITEM_UNITS,
      payload: {id, units}
  }
}
export function deleteFromCart({id}) {
  return {
      type: DELETE_FROM_CART,
      payload: {id}
  }
}
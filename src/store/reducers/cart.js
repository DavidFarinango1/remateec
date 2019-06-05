import {ADD_TO_CART,  UPDATE_ITEM_UNITS, DELETE_FROM_CART,REDUCE_TO_CART} from '../action-types/index.js';

function addCart(state = [] ,action){
    switch(action.type){
        case ADD_TO_CART:
            let existingIndex = findProductIndex(state, action.payload.id);
            if (existingIndex !== -1) {
                state[existingIndex].units += 1;
                return state.concat([]);
            }
            return state.concat(action.payload);
        case REDUCE_TO_CART:
            let existingIndex2 = findProductIndex(state, action.payload.id);
            if (existingIndex2 !== -1) {
                state[existingIndex2].units -= 1;
                return state.concat([]);
            }
        case UPDATE_ITEM_UNITS:
            let existingItemIndex = findProductIndex(state, action.payload.id);
            if (state[existingItemIndex].units === 0 && action.payload.units === -1) {
                break;
            }
            state[existingItemIndex].units += action.payload.units;
            return state.concat([]);
        case DELETE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];            
    }
    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }
    return state;
}
export default addCart;
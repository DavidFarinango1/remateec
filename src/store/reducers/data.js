import schema from '../schemas/index.js';
import {fromJS} from 'immutable';
import {SEARCH_PRODUCT} from '../action-types/index.js';

const initialState = fromJS({
    // Este reducer va a manejar todo mi estado inicial, modal,etc
    // Cada key se va a convertir en un reducer    
        // data: {
            // por ahora todo lo que tenga que ver con informacion en un solo reducer
            entities: schema.entities,
            categories: schema.result.categories,
            search: '',
            // cambia de [] a '' xq ahora llega desde case 'SEARCH_PRODUCT' un mapa con un string de la busqueda, ya no un objeto
        // },
    })

function data(state = initialState,action){
    switch(action.type){
        case SEARCH_PRODUCT:{
            return state.set('search', action.payload.query )
        }
        default:
            return state
    }
}
export default data;
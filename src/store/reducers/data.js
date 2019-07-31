// import schema from '../schemas/index.js';
import {fromJS} from 'immutable';
import {SEARCH_PRODUCT} from '../action-types/index.js';
// import {fromJS} from 'immutable';

// const initialState = fromJS({
//     // Este reducer va a manejar todo mi estado inicial, modal,etc
//     // Cada key se va a convertir en un reducer    
//         // data: {
//             // por ahora todo lo que tenga que ver con informacion en un solo reducer
//             entities: schema.entities,
//             categories: schema.result.categories,
//             search: '',
//             // cambia de [] a '' xq ahora llega desde case 'SEARCH_PRODUCT' un mapa con un string de la busqueda, ya no un objeto
// //         // },
// //     })
// const initialState = 
// [
//     {
//     nombre: 'perro',
//     apellido: 'gato',
//     },
//     {
//     nombre: 'perrito',
//     apellido: 'gata',
//     },
//     {
//     nombre: 'perr',
//     apellido: 'gaa',
//     },
// ]

const initialState = fromJS({
    // data: {
    //   ...data,
    // },
    search: '',
  })
  
// function searchProduct(state = initialState, action){
//     switch(action.type){
//         case SEARCH_PRODUCT:
//                 console.log(action.payload.value)
//             return state
        
//         default:
//             return state
//     }
// }
// export default searchProduct;
function searchProduct(state=initialState, action) {
    switch (action.type) {
      case SEARCH_PRODUCT: {
        // action.payload.query
        // let results = [];
        // if (action.payload.value) {
        // //   const list = state.data.categories[2].playlist;
        // //   results = list.filter((item) => {
        //     // return item.author.includes(action.payload.value)
        //     results = action.payload.value
        //     // return results
        // //   })
        // }
        return state.set('search', action.payload.value)
        // console.log(state.search)
      }
      default:
        return state
    }
  }
export default searchProduct;
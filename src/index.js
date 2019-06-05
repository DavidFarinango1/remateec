import React from 'react';
import {render} from 'react-dom';
import Firebase, {FirebaseContext} from './Firebase';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducers/index'
import * as serviceWorker from './serviceWorker.js';
import App from './App.js';

const app = document.getElementById('root');

const store = createStore(
  reducer,
)

render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Provider>
    , app);

serviceWorker.unregister();

// Haciéndolo de esta manera, podemos estar seguros de que Firebase solo se crea 
// una instancia y se inyecta a través del Context API de React al árbol de componentes 
// de React. Ahora, cada componente que está interesado en usar Firebase tiene acceso 
// a la instancia de Firebase con un FirebaseContext.Consumercomponente.

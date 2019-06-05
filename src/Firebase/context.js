import React from 'react';

const FirebaseContext = React.createContext(null);

// La createContext()función crea esencialmente dos componentes. 
// El FirebaseContext.Providercomponente se utiliza para proporcionar 
// una instancia de Firebase una vez en el nivel superior de su árbol 
// de componentes React, lo que haremos en esta sección; y el FirebaseContext.
// Consumercomponente se utiliza para recuperar la instancia de Firebase si 
// es necesario en el componente React.
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext;
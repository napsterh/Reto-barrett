import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './servidor';

import { estadoInicial } from './sesion/estadoInicial';
import { StateProvider } from './sesion/store';
import { mainReducer } from './sesion/reducers';


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <StateProvider initialState={estadoInicial} reducer={mainReducer}>
          <App />
        </StateProvider>
    </FirebaseContext.Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

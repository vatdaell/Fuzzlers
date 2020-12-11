import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware, compose} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store
let store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

// DEBUG purposes
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//import reportWebVitals from './reportWebVitals';
//reportWebVitals();

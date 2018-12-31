import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


let store=createStore(allReducer);
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));

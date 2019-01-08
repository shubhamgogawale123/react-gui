import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link,withRouter  } from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Home from './pages/Home.js';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from './reducer/appStore'

const store = createStore(allReducer)

ReactDOM.render(
<Provider store={store}>
<Router>
<div>
<Route exact path="/" component={App}/>
<Route path="/sign-up" component={SignUpForm}/>
<Route path="/sign-in" component={SignInForm}/>
<Route path="/home" component={Home}/>
</div>
</Router>
</Provider>
, document.getElementById('app'));

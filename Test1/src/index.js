import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Sidebar from './pages/Sidebar';
import Home from './pages/Home.js';

ReactDOM.render(
<Router>
<div>
<Route exact path="/" component={App}/>
<Route path="/home" component={Home}/>
</div>
</Router>

, document.getElementById('app'));

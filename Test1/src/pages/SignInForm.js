import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home.js';


import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class SignInForm extends Component {
    constructor(props) {
        super(props);

        console.log("form sign in component",props);

        this.state = {
            email: '',
            password: '',
            flag:true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
      nextPath(path) {
        this.props.history.push(path);
        document.location.reload(true);
      }
    handleSubmit(e) {

        this.nextPath('/home');
    }

    render() {
        return (


        <div className="FormCenter" >

          <form onSubmit={this.handleSubmit} className="FormFields">

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
              </form>

          </div>


        );
    }
}

export default withRouter(SignInForm);

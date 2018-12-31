import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home.js';
import { BrowserRouter as Router, Route,NavLink } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            flag:true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("here");
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
        console.log("path",path);
        this.props.history.push(path);
      }
    handleSubmit(e) {
        console.log('The form was submitted with the following data:');
        this.nextPath('/home');
    }
    render() {
        return (
          <Router>
        <div className="FormCenter">

            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button type="submit" onClick={this.handleSubmit} className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>

              <Route exact path="/home" component={Home}/>


          </div>
          </Router>
        );
    }
}

export default withRouter(SignInForm);

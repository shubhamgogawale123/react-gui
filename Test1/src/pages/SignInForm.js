import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Sidebar from './Sidebar';
import Home from './Home.js';
import {connect} from "react-redux";
import Appdesign from './Appdesign';
import '../App.css'


import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class SignInForm extends Component {
    constructor(props) {
        super(props);



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

      }
    handleSubmit(e) {
        this.nextPath('/home');
    }
    componentWillMount()
    {
      console.log("Signinform",this.props.finals.x);
      console.log("Y-axis",this.props.finals.y);

    }
    render() {
        {
          var top=0-(18*this.props.finals.y);
          var left=this.props.finals.x-20;
          var divStyle = {
            marginTop:top,
            marginLeft:left,
            width:"400px"
            };
        }

        return (
        <div>
        <Appdesign/>
        <div style={divStyle}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>

          <div className="FormField">
              <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign In</button> <Link to="/sign-up" className="FormField__Link">Create an account</Link>
          </div>

      </div>

        </div>



        );
    }




}
function mapStateToProps(state)
{
    return{
      finals:state.finals
    }
}

export default withRouter(connect(mapStateToProps)(SignInForm));

import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class Design extends React.Component
{
    render()
    {
      return(
        <div className="App__Form">
          <div className="PageSwitcher" id="e1">
              <NavLink to="/sign-in"  activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
                <NavLink to="/sign-in"activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>
        </div>
      );
    }
}
export default Design;

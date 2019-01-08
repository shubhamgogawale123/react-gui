import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Appdesign from './pages/Appdesign';
import {positionFinder} from './actions/posaction'
import './App.css';
import {bindActionCreators} from 'redux';

class App extends Component {
  constructor(props)
  {
      super(props);


  }

  render() {
    return (
      <div>
        <Appdesign/>

      </div>



    );
  }
  componentDidMount()
  {
      console.log("Test:-");
      let position=document.getElementById("e1").getBoundingClientRect();
      this.props.positionFinder(position);


  }


}
function mapStateToProps(state)
{
    return{
      pos:state.pos,
      appState:state,


    }
}
function matchDispatchToProps(dispatch)
{
  return bindActionCreators({positionFinder:positionFinder},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(App);

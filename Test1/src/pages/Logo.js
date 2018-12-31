import React, { Component } from 'react';
import '../styles/logo.scss';

class Logo extends Component
{
    render()
    {
        return(
            <div>
              <img src={require("../images/background_logo.jpg")} className="images"/>
            </div>
        );


    }




}
export default Logo

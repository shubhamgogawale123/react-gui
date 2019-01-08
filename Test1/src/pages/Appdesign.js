import React from 'react';
import Logo from './Logo';
import Design from './Design';
import '../App.css';


class Appdesign extends React.Component
{
  render()
  {
    return(
      <div className="App">
      <div className="App__Aside">

          <Logo/>

      </div>
          <Design/>
      </div>
    );
  }

  

}
export default Appdesign;

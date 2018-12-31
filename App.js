import React from 'react';
import Userlist from './component/userlist.js';
import Userdetails from './component/Userdetails.js';
class App extends React.Component {



   render() {
      return (
         <div>
         <Userlist />
         <hr/>
         <Userdetails />
         </div>
      );
   }
}

export default App;

import React from 'react';
import Navigation from './navgation';

import logo from '../assets/images/ids-logo-2019.svg';

function startpage(){

return(
<header className="App-header" >
        <img src={logo} className="App-logo" alt="IDS FCR logo" />
        <h1>IDS FCR APP</h1>
        
        <div className="col-lg-3" >
        <a type="button"  className="btn btn-lg btn-info btn-block" href="/dashboard"     >Start</a>
        </div>
      
      </header>
);

}

export default startpage;
import React from 'react';
import $ from 'jquery/dist/jquery.min.js';
import Popper from 'popper.js';
import ViewsRoutes from './viewroutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/App.css';

import Navigation from './navgation';
import Startpage from './startpage';
import viewroutes from './viewroutes';


function App() {
  return (
    <div className="App mr-1">
     
    <ViewsRoutes/>
      
    </div>
  );
}

export default App;

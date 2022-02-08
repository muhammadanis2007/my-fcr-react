import React from 'react';
import {Switch , Route} from 'react-router-dom';

import StartPage from './startpage';
import Dashboard from './dashboard';
import Training from './training';
import FaceRecognition from './fcrlog';


const viewroutes = () =>  (
    
    <Switch>
       
        <Route exact path="/" component={StartPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/training" component={Training} />
        <Route path="/face-recgnition-log" component={FaceRecognition} />

    </Switch>

);

export default viewroutes;
import React from 'react';

import logo from '../assets/images/ids-logo-2019.svg';

function Navigation(){

    return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand nav-brand-logo" href="/" ><img src={logo} alt="IDS FCR APP" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsApp" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarsApp">
            <ul className="navbar-nav m-auto">
               
                <li className="nav-item">
                    <a class="nav-link" href="/dashboard"> <i className="fa fa-cogs fa-2x"></i> </a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="/training"> <i className="fa fa-address-card fa-2x" ></i> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/face-recgnition-log"> <i className="fa fa-camera-retro fa-2x" ></i> </a>
                </li>
                
            </ul>
          
        </div>
    </div>
</nav>

    );
}

export default Navigation;
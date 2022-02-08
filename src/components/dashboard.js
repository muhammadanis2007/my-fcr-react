import React from 'react';
import Navigation from './navgation';


function dashboard(){

    return(
      
    <section className="app-view" >
          
        <Navigation/>
        <div className="col-lg-4 col-md-4 col-sm-4 ">
        <div className="row" >
        <div className="col-lg-6 col-md-6 col-sm-6 embed-responsive embed-responsive-16by9" >
        <video id="vdo" className="embed-responsive-item" poster="http://icons.iconarchive.com/icons/papirus-team/papirus-places/256/folder-red-video-icon.png" ></video>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6" >
        <img id="snapImg" className="responsive rounded-circle" src="http://www.lte-esafety.co.uk/wp-content/uploads/2015/06/avatar.png" alt="snap" />
        </div>
        </div>
        </div>

    </section>
    );
}

export default dashboard;
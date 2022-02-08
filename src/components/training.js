import React from 'react';
import Navigation from './navgation';
import App from './App';


const training = () => (

<section className="app-view" >
          
        <Navigation/>
        
        <div className="col-lg-6 col-md-6 col-sm-6">
                
        <div className="row">
               
                <div className="col-md-12 mb-4">
            
                <div className="card bg-dark form-white">
                <div className="card-body">
                        
                            <form>
                                <h2 className="text-center py-4 font-bold font-up white-text">Face Training</h2>
                                <div className="md-form">
                                    <i className="fa fa-user prefix white-text"></i>
                                    <input type="text" id="form32" className="form-control" />
                                    <label for="form32">First name</label>
                                </div>
                                <div className="md-form">
                                    <i className="fa fa-envelope prefix white-text"></i>
                                    <input type="text" id="form22" className="form-control" />
                                    <label for="form22">Last Last</label>
                                </div>
                                <div className="md-form">
                                    <i className="fa fa-tag prefix white-text"></i>
                                    <input type="text" id="form322" className="form-control" />
                                    <label for="form342">Employee ID</label>
                                </div>
                               
                                <div className="text-center">
                                    <button className="btn btn-info btn-lg waves-effect waves-light">Send</button>
                                </div>
                            </form>
                           
                </div>
                </div>

                </div>
        </div>
        </div>
    </section>    
        
    
)

export default training;
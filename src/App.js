import React from 'react';
import './App.css';

import icon from './images/Flora.png'

function App() {
  return (
    <div className="App">

<div class="container-fluid page-header justify-content-center pt-2">
            <div class="row">
                <div class ="col-12">
            <h1 class="display-4 title p-4">HANGING LIGHTS</h1>
            <p></p>
        </div>
    </div>
        </div>
              <nav class="navbar navbar-light">
            <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
            <button class="btn btn-sm btn-outline-secondary my-2 my-lg-0" type="button">Smaller button</button>
        </nav>
      <div className="container-fluid mt-5 parent">
          <div className="row p-3" id="userbox">
            <div className="col-12">
              <div className="row">
              <div className="col-md-12 parent">
                  <div className="row">
                    <div className="col-md-4 parent">
                      <img src={icon} id="iconbox"></img>
                    </div>
                    <div className="col-sm-12 col-md-8 parent">
                      <h3 id="profile-name">BANANAMANTIS</h3>
                      <h3>LV 5</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* tasks */}
              <div className="row mt-3">
                <div className="col-sm-0 col-md-0 col-lg-2"></div>
                <div className="col parent">
                  <img src={icon} id="iconbox"></img>
                </div>
                <div className="col parent">
                  <img src={icon} id="iconbox"></img>
                </div>
                <div className="col parent">
                  <img src={icon} id="iconbox"></img>
                </div>
                <div className="col parent">
                  <img src={icon} id="iconbox"></img>
                </div>
                <div className="col-sm-0 col-md-0 col-lg-2"></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;

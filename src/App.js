import React from 'react';
import './App.css';

import icon from './images/Flora.png'
import garwyvern from './images/batsy.png'

function App() {
  return (
    <div className="App">

<div class="container-fluid page-header justify-content-center pt-2">
            <div class="row">
                <div class ="col-12">
            <h1 class="title p-4">HANGING LIGHTS</h1>
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
            </div>
          </div>
          <div className="row p-3 pb-5" id="display">
            <div className="col-12">
            <div className="row mb-5">
                <div className="col-12">
                  <div className="row">
                    <div className="col-sm-0 col-md-2"></div>
                    <div className="col parent">
                      <h3 className="profile-button">CHARACTERS</h3>
                    </div>
                    <div className="col parent">
                      <h3 className="profile-button">CHARACTERS</h3>
                    </div>
                    <div className="col parent">
                      <h3 className="profile-button">CHARACTERS</h3>
                    </div>
                    <div className="col parent">
                      <h3 className="profile-button">CHARACTERS</h3>
                    </div>
                    <div className="col-sm-0 col-md-2"></div>
                  </div>
                </div>
            </div>

              <div className="row">
                <div className="col-12">
                  {/* tasks editing comment */}
                  <div className="row justify-content-center">
                    <div className="col-sm-0 col-md-0 col-lg-2"></div>
                    <div className="col parent">
                      <p className="m-0 p-0">EXPLORING</p>
                      <p className="m-0 p-0 mb-2">00:00</p>
                      <img src={garwyvern} id="taskbox"></img>
                    </div>
                    <div className="col parent ">
                      <p className="m-0 p-0">GARDENING</p>
                      <p className="m-0 p-0 mb-2">00:00</p>
                      <img src={garwyvern} id="taskbox"></img>
                    </div>
                    <div className="col parent">
                      <p className="m-0 p-0">FISHING</p>
                      <p className="m-0 p-0 mb-2">00:00</p>
                      <img src={garwyvern} id="taskbox"></img>
                    </div>
                    <div className="col parent">
                      <p className="m-0 p-0">EXPLORING</p>
                      <p className="m-0 p-0 mb-2">00:00</p>
                      <img src={garwyvern} id="taskbox"></img>
                    </div>
                    <div className="col-sm-0 col-md-0 col-lg-2"></div>
                  </div>
                </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import icon from './images/Flora.png'
import garwyvern from './images/batsy.png'

function App() {
  return (
    <div className="App">
      <div class="container-fluid page-header text-center pt-4">
        <div class="row">
          <div class="col parent">
            <h1 class="title center">HANGING LIGHTS</h1>
            <p></p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div class="row">
          <div class="col nav-button">
            <h3 class="nav-button-color">GAME</h3>
            <p></p>
          </div>
          <div class="col nav-button">
            <h3 class="nav-button-color">DATABASE</h3>
            <p></p>
          </div>
          <div class="col nav-button">
            <h3 class="nav-button-color">LORE</h3>
            <p></p>
          </div>
        </div>
      </div>
      <div className="container-fluid parent">
        <div className="row p-3" id="userbox">
          <div className="col-12">
            <div className="row">
              <div className="col-md-12 parent">
                <div className="row">
                  <div className="col-md-4 parent">
                    <img src={icon} id="iconbox"></img>
                  </div>
                  <div className="col-sm-12 col-md-8 parent">
                    <h3 id="profile-name">BANAN</h3>
                    <h3>LV 5</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-5" id="display">
          <div className="col-12">
            <div className="row mb-4 pt-3 pb-3" id="display-nav">
              <div className="col-12">
                <div className="row">
                  <div className="col mb-2 mt-2 parent">
                    <h5 className="profile-button">CHARACTERS</h5>
                  </div>
                  <div className="col mb-2 mt-2 parent">
                    <h5 className="profile-button">INVENTORY</h5>
                  </div>
                  <div className="col mb-2 mt-2 parent">
                    <h5 className="profile-button">GARDENS</h5>
                  </div>
                  <div className="col mb-2 mt-2 parent">
                    <h5 className="profile-button">GALLERY</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                {/* tasks editing comment */}
                <div className="row justify-content-center">
                  <div className="col-sm-0 col-md-0 col-lg-2"></div>
                  <div className="col parent">
                    <p className="m-0 p-0">00:00</p>
                    <p className="m-0 p-0 mb-2">EXPLORING</p>
                    <img src={garwyvern} id="taskbox"></img>
                  </div>
                  <div className="col parent ">
                    <p className="m-0 p-0">00:00</p>
                    <p className="m-0 p-0 mb-2">GARDENING</p>
                    <img src={garwyvern} id="taskbox"></img>
                  </div>
                  <div className="col parent">
                    <p className="m-0 p-0">00:00</p>
                    <p className="m-0 p-0 mb-2">FISHING</p>
                    <img src={garwyvern} id="taskbox"></img>
                  </div>
                  <div className="col parent">
                    <p className="m-0 p-0">00:00</p>
                    <p className="m-0 p-0 mb-2">EXPLORING</p>
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

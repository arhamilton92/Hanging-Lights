import React from 'react';
import './App.css';
import Header from './components/Header'

import icon from './images/Flora.png'
import garwyvern from './images/batsy.png'
import peticon from './images/pomicon.png'
import galleryicon from './images/gallery.png'
import itemicon from './images/items.png'
import charactericon from './images/characters.png'

function App() {
  return (
    <div className="App">
      <Header />
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
            <div className="row mb-5" id="display-nav">
              <div className="col-12 parent">
                <div className="row center">
                  <div className="col-sm-6 col-lg-2 mb-2 mt-2 parent nav-element">
                    <img src={charactericon} class="nav-icon"></img>
                  </div>
                  <div className="d-none d-lg-block dot">
                    <h1></h1>
                  </div>
                  <div className="col-sm-6 col-lg-2  mb-2 mt-2 parent nav-element">
                    <img src={peticon} class="nav-icon"></img>
                  </div>
                  <div className="d-none d-lg-block dot">
                    <h1></h1>
                  </div>
                  <div className="col-sm-6 col-lg-2  mb-2 mt-2 parent nav-element">
                    <img src={itemicon} class="nav-icon"></img>
                  </div>
                  <div className="d-none d-lg-block dot">
                    <h1></h1>
                  </div>
                  <div className="col-sm-6 col-lg-2  xs-2 mt-2 parent nav-element">
                    <img src={galleryicon} class="nav-icon"></img>
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

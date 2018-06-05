import React, { Component } from 'react';
import base  from '../base'
// import './Play.css';
import Header from './Header';

class Play extends Component {
    constructor() {
      super();
  
      this.state = {
        games: []
      };
    }
  
    // <div className="top" id="top">
    //   <Header />
    // </div>
    // <div className="bottom" id="bottom" />
  
    render() {
      return (
        <React.Fragment>
            <div className="top" id="top">
                <Header />
                <div id="topBody" className="body">
                    <div className="form">
                        <label for="gameCode">Game Code:</label>
                        <input type="text" id="inputGameCode" name="gameCode" placeholder="Enter Game Code" />
                    </div>
                    
                    <button id="btnJoinGame" className="btn btn-primary">Join Game</button>
                </div>
            </div>
            <div className="bottom" id="bottom">
                
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default Play;
  
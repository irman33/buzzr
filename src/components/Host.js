import React, { Component } from 'react';
import base  from '../base'
// import './Host.css';
import Header from './Header';
class Host extends Component {
    constructor() {
      super();
  
      this.state = {
        games: []
      };
    }

    render() {
      return (
        <React.Fragment>
          <div className="top" id="top">
            <div id="topBody" className="topBody">
              <div className="form">
                <label htmlFor="redTeamName">Red Team Name:</label>
                <input type="text" id="inputRedName" name="redTeamName"  placeholder="Red Team"/>
                <label htmlFor="blueTeamName">Blue Team Name:</label>
                <input type="text" id="inputBlueName" name="blueTeamName" placeholder="Blue Team"/>
              </div>
              <button id="btnCreateGame" className="btn">Create Game</button> 
            </div>
          </div>
          <div className="bottom" id="bottom">
                
          </div>
        </React.Fragment>
      );
    }
  }
  
export default Host;
  
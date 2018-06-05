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
  
    // <div className="top" id="top">
    //   <Header />
    // </div>
    // <div className="bottom" id="bottom" />
  
    render() {
      return (
        <React.Fragment>
            <div class="top" id="top">
                <Header />
                <div id="topBody" class="body">
                    <div class="form">
                            <label for="hostName">Host Name:</label>
                            <input type="text" id="inputHostName" name="hostName"  placeholder="Host Name"/>
                            <label for="redTeamName">Red Team Name:</label>
                            <input type="text" id="inputRedName" name="redTeamName"  placeholder="Red Team"/>
                            <label for="blueTeamName">Blue Team Name:</label>
                            <input type="text" id="inputBlueName" name="blueTeamName" placeholder="Blue Team"/>
                    </div>
                    <button id="btnCreateGame" class="btn">Create Game</button>
                    
                </div>
            </div>
            <div className="bottom" id="bottom"></div>
        </React.Fragment>
      );
    }
  }
  
  export default Host;
  
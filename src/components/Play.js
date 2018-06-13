import React, { Component } from "react";

class Play extends Component {
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
              <label htmlFor="gameCode">Game Code:</label>
              <input
                type="text"
                id="inputGameCode"
                name="gameCode"
                placeholder="Enter Game Code"
              />
            </div>
            <button id="btnJoinGame" className="btn btn-primary">
              Join Game
            </button>
          </div>
        </div>
        <div className="bottom" id="bottom" />
      </React.Fragment>
    );
  }
}

export default Play;

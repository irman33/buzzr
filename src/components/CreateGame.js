import React, { Component } from "react";

class CreateGame extends Component {
  constructor() {
    super();

    this.enterTeamNames = this.enterTeamNames.bind(this);

    this.state = {
      gameCreated: false,
      game: {}
    };
  }

  redTeamNameRef = React.createRef();
  blueTeamNameRef = React.createRef();

  enterTeamNames() {
    const redTeamName = this.redTeamNameRef.current.value;
    const blueTeamName = this.blueTeamNameRef.current.value;

    this.props.createGame(redTeamName, blueTeamName);
  }

  render() {
    return (
      <React.Fragment>
        <div className="top" id="top">
          <div id="topBody" className="topBody">
            <h2>Create New Game: </h2>
            <div className="form">
              <label htmlFor="redTeamName">Red Team Name:</label>
              <input
                ref={this.redTeamNameRef}
                type="text"
                id="inputRedName"
                name="redTeamName"
                placeholder="Red Team"
              />
              <label htmlFor="blueTeamName">Blue Team Name:</label>
              <input
                ref={this.blueTeamNameRef}
                type="text"
                id="inputBlueName"
                name="blueTeamName"
                placeholder="Blue Team"
              />
            </div>
            <button
              id="btnCreateGame"
              className="btn"
              onClick={this.enterTeamNames}
            >
              Create Game
            </button>
          </div>
        </div>
        <div className="bottom" id="bottom" />
      </React.Fragment>
    );
  }
}

export default CreateGame;

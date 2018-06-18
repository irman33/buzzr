import React, { Component } from "react";

class JoinGame extends Component {
  constructor() {
    super();

    this.enterGamecode = this.enterGamecode.bind(this);

    this.state = {
      gameCreated: false,
      game: {}
    };
  }

  gameCodeRef = React.createRef();

  enterGamecode() {
    const gameCode = this.gameCodeRef.current.value;
    this.props.joinGame(gameCode);
  }

  render() {
    return (
      <React.Fragment>
        <div className="top" id="top">
          <div id="topBody" className="topBody">
            <div className="form">
              <label htmlFor="gameCode">Game Code:</label>
              <input
                ref={this.gameCodeRef}
                type="text"
                id="inputGameCode"
                name="gameCode"
                placeholder="Enter Game Code"
              />
            </div>
            <button
              id="btnJoinGame"
              className="btn btn-primary"
              onClick={this.enterGamecode}
            >
              Join Game
            </button>
          </div>
        </div>
        <div className="bottom" id="bottom" />
      </React.Fragment>
    );
  }
}

export default JoinGame;

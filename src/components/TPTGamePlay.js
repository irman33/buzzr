import React, { Component } from "react";
import base from "../base";

class TPTGamePlay extends Component {
  constructor() {
    super();

    this.state = {
      game: {}
    };
  }

  componentDidMount() {
    this.gameRef = base.syncState(`games/${this.props.gameCode}`, {
      context: this,
      state: "game"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.gameRef);
  }

  render() {
    let redTeamRoster = [];
    let blueTeamRoster = [];

    if (this.state.game.redTeam) {
      redTeamRoster = this.state.game.redTeam.map((name, i) => (
        <li key={i}>{name}</li>
      ));
      blueTeamRoster = this.state.game.blueTeam.map((name, i) => (
        <li key={i}>{name}</li>
      ));
    }

    return (
      <React.Fragment>
        <div className="top" id="top">
          <div id="topBody" className="topBody">
            <div className="scoreboard">
              <div className="teams red">
                <div id="redTeamName" className="team-name">
                  {this.state.game.redTeamName}
                </div>
              </div>
              <div className="scores">
                <div id="redScore" className="score red">
                  {this.state.game.redTeamScore}
                </div>
                <div className="vs"> VS </div>
                <div id="blueScore" className="score blue">
                  {this.state.game.blueTeamScore}
                </div>
              </div>
              <div className="teams blue">
                <div id="blueTeamName" className="team-name">
                  {this.state.game.blueTeamName}
                </div>
              </div>
              <div className="rosters">
                <div className="roster red">
                  <ul id="redTeamRoster">{redTeamRoster}</ul>
                </div>
                <div className="roster blue">
                  <ul id="blueTeamRoster">{blueTeamRoster}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom" id="bottom">
          <audio id="buzzerSound" src="buzzer.mp3" />
          <button id="btnBuzzIn" className="btn btn-buzz">
            BUZZ IN
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default TPTGamePlay;

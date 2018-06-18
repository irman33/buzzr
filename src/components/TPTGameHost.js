import React, { Component } from "react";
import base from "../base";

class TPTGameHost extends Component {
  constructor(props) {
    super(props);

    this.redTeamPlus = this.redTeamPlus.bind(this);
    this.redTeamMinus = this.redTeamMinus.bind(this);
    this.blueTeamPlus = this.blueTeamPlus.bind(this);
    this.blueTeamMinus = this.blueTeamMinus.bind(this);
    this.resetBuzzer = this.resetBuzzer.bind(this);

    this.state = {
      game: {}
    };
  }

  pointsRef = React.createRef();

  resetBuzzer() {
    let game = { ...this.state.game };
    game.buzzerOn = true;
    game.buzzedIn = "";
    this.setState({ game });
  }

  redTeamPlus() {
    let game = { ...this.state.game };
    game.redTeamScore += +this.pointsRef.current.value;
    this.setState({ game });
  }

  redTeamMinus() {
    let game = { ...this.state.game };
    game.redTeamScore -= +this.pointsRef.current.value;
    this.setState({ game });
  }

  blueTeamPlus() {
    let game = { ...this.state.game };
    game.blueTeamScore += +this.pointsRef.current.value;
    this.setState({ game });
  }

  blueTeamMinus() {
    let game = { ...this.state.game };
    game.blueTeamScore -= +this.pointsRef.current.value;
    this.setState({ game });
  }

  componentDidMount() {
    this.gameRef = base.syncState(`games/${this.props.game.gameCode}`, {
      context: this,
      state: "game"
    });

    this.setState({ game: this.props.game });
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
            <div id="gameCode" className="game-code">
              Game Code: {this.state.game.gameCode}
            </div>
            <div className="scoreboard">
              <div className="teams red">
                <div id="redTeamName" className="team-name">
                  {this.state.game.redTeamName}
                </div>
              </div>
              <div className="scores">
                <div className="score-buttons red">
                  <button
                    id="redPlus"
                    className="btn btn-small"
                    onClick={this.redTeamPlus}
                  >
                    +
                  </button>
                  <button
                    id="redMinus"
                    className="btn btn-small"
                    onClick={this.redTeamMinus}
                  >
                    -
                  </button>
                </div>
                <div id="redScore" className="score red">
                  {this.state.game.redTeamScore}
                </div>
                <div className="vs"> VS </div>
                <div id="blueScore" className="score blue">
                  {this.state.game.blueTeamScore}
                </div>
                <div className="score-buttons blue">
                  <button
                    id="bluePlus"
                    className="btn btn-small"
                    onClick={this.blueTeamPlus}
                  >
                    +
                  </button>
                  <button
                    id="blueMinus"
                    className="btn btn-small"
                    onClick={this.blueTeamMinus}
                  >
                    -
                  </button>
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
                <select
                  ref={this.pointsRef}
                  id="pointValue"
                  className="btn btn-select"
                  defaultValue={1}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
                <div className="roster blue">
                  <ul id="blueTeamRoster">{blueTeamRoster}</ul>
                </div>
              </div>
            </div>
            <button
              id="btnResetBuzzer"
              className="btn"
              onClick={this.resetBuzzer}
            >
              Reset Buzzer
            </button>
          </div>
        </div>
        <div className="bottom" id="bottom" />
      </React.Fragment>
    );
  }
}

export default TPTGameHost;

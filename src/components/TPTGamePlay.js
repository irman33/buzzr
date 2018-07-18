import React, { Component } from "react";
import base from "../base";

class TPTGamePlay extends Component {
  constructor(props) {
    super(props);

    this.buzz = this.buzz.bind(this);

    this.state = {
      game: {},
      user: this.props.user
    };
  }

  componentDidMount() {
    this.gameRef = base.bindToState(`activeGames/${this.props.gameCode}`, {
      context: this,
      state: "game"
    });

    // Sign into team Roster using info from User Obj
    base
      .fetch(`activeGames/${this.props.gameCode}/${this.props.user.team}Team`, {
        asArray: true
      })
      .then(teamRoster => {
        console.log(teamRoster);
        teamRoster.push(this.props.user.displayName);

        base
          .post(
            `activeGames/${this.props.gameCode}/${
              this.props.user.game.team
            }Team`,
            {
              data: teamRoster
            }
          )
          .then(() => {
            console.log("Roster Updated", teamRoster);
          })
          .catch(err => {
            console.log(err);
          });
      });
  }

  componentWillUnmount() {
    base.removeBinding(this.gameRef);

    // Sign out of team Roster
    base
      .fetch(`activeGames/${this.props.gameCode}/${this.props.user.team}Team`, {
        asArray: true
      })
      .then(teamRoster => {
        console.log(teamRoster);

        const index = teamRoster.indexOf(this.props.user.displayName);
        if (index !== -1) teamRoster.splice(index, 1);

        base
          .post(
            `activeGames/${this.props.gameCode}/${
              this.props.user.game.team
            }Team`,
            {
              data: teamRoster
            }
          )
          .then(() => {
            console.log("Roster Updated", teamRoster);
          })
          .catch(err => {
            console.log(err);
          });
      });
  }

  buzz() {
    let gameCode = this.state.game.gameCode;
    console.log(this.state.user);

    base
      .fetch(`activeGames/${gameCode}/buzzer`, { asArray: false })
      .then(buzzer => {
        console.log(buzzer);
        if (buzzer.buzzerOn) {
          base
            .post(`activeGames/${gameCode}/buzzer`, {
              data: { buzzerOn: false, buzzedIn: this.props.user.displayName }
            })
            .then(() => {
              //play buzzer sound
              console.log("buzzed in", { buzzerOn: false, buzzedIn: "Irman" });
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
  }

  render() {
    let redTeamRoster = [];
    let blueTeamRoster = [];
    let bottom;
    let teamColors = { red: "rgb(238, 16, 16)", blue: "rgb(27, 90, 207)" };

    if (this.state.game.redTeam) {
      redTeamRoster = this.state.game.redTeam.map((name, i) => (
        <li key={i}>{name}</li>
      ));
    }
    if (this.state.game.blueTeam) {
      blueTeamRoster = this.state.game.blueTeam.map((name, i) => (
        <li key={i}>{name}</li>
      ));
    }

    if (this.state.game.buzzer) {
      bottom = this.state.game.buzzer.buzzerOn ? (
        <div className="bottom" id="bottom">
          <audio id="buzzerSound" src="buzzer.mp3" />
          <button id="btnBuzzIn" className="btn btn-buzz" onClick={this.buzz}>
            BUZZ IN
          </button>
        </div>
      ) : (
        <div
          className="bottom"
          id="bottom"
          style={{ background: "rgb(238, 16, 16)" }}
        >
          <audio id="buzzerSound" src="buzzer.mp3" />
          <span>{this.state.game.buzzer.buzzedIn}</span>
        </div>
      );
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
        {bottom}
      </React.Fragment>
    );
  }
}

export default TPTGamePlay;

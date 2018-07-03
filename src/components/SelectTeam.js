import React, { Component } from "react";

class SelectTeam extends Component {
  constructor() {
    super();

    this.enterTeam = this.enterTeam.bind(this);
    this.handleTeamSelect = this.handleTeamSelect.bind(this);

    this.state = {
      team: null
    };
  }

  teamRef = React.createRef();

  handleTeamSelect(e) {
    this.setState({
      team: e.target.value
    });
  }

  enterTeam() {
    if (this.state.team) {
      this.props.selectTeam(this.state.team);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="top">
          <div className="topBody">
            <div className="form-wrapper">
              {/* <div> Hi {this.props.user.displayName}</div> */}
              <div className="radio__title">Select Your Team:</div>
              <label
                className={
                  this.state.team === "red"
                    ? "radio__wrapper radio__wrapper--red radio__wrapper--active"
                    : "radio__wrapper radio__wrapper--red"
                }
              >
                <input
                  className="radio__radio"
                  type="radio"
                  name="team"
                  value="red"
                  onChange={this.handleTeamSelect}
                />
                {this.props.game.redTeamName}
              </label>
              <label
                className={
                  this.state.team === "blue"
                    ? "radio__wrapper radio__wrapper--blue radio__wrapper--active"
                    : "radio__wrapper radio__wrapper--blue"
                }
              >
                <input
                  className="radio__radio"
                  type="radio"
                  name="team"
                  value="blue"
                  onChange={this.handleTeamSelect}
                />
                {this.props.game.blueTeamName}
              </label>
            </div>
            <button className="btn btn-primary" onClick={this.enterTeam}>
              Join Game
            </button>
          </div>
        </div>
        <div className="bottom" id="bottom" />
      </React.Fragment>
    );
  }
}

export default SelectTeam;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
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
          <div id="topBody" className="topBody topBody--center">
            <Link className="btn" to="/play">
              Play
            </Link>
            <Link className="btn" to="/host">
              Host
            </Link>
            <Link className="btn" to="/watch">
              Watch
            </Link>
          </div>
        </div>
        <div className="bottom" id="bottom" />
      </React.Fragment>
    );
  }
}

export default Home;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";

class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    authenticate: PropTypes.func.isRequired
  };

  render() {
    console.log(this.props);

    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (this.props.user) {
      return <Redirect to={from} />;
    }

    return (
      <React.Fragment>
        <div className="top" id="top">
          <div id="topBody" className="topBody" />
          <button
            className="btn btn-primary"
            onClick={() => this.props.authenticate()}
          >
            Sign in to Play
          </button>
        </div>
        <div className="bottom" id="bottom" />
      </React.Fragment>
    );
  }
}

export default withRouter(Login);

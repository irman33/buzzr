import React, { Component } from "react";
import PropTypes from "prop-types";
import kLogo from "../img/k-caret.png";
import Profile from "./Profile";

class Header extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  render() {
    return (
      <div className="header">
        <img className="logo" src={kLogo} alt="Klogo" />
        <div className="title ">
          <h1>KAPLAN TPT</h1>
        </div>
        {/* <div className="spacer" /> */}
        <Profile user={this.props.user} logout={this.props.logout} />
      </div>
    );
  }
}

export default Header;

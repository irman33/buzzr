import React, { Component } from "react";
import PropTypes from "prop-types";

class Profile extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  render() {
    if (!this.props.user) {
      return <p>Log In</p>;
    } else {
      return (
        <div className="profile">
          <img
            src={this.props.user.photoURL}
            alt={this.props.user.displayName}
          />
          <div className="ellipsis" />
          <div className="menu">
            <ul>
              <li>
                <button
                  className="btn"
                  onClick={() => {
                    this.props.logout();
                  }}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Profile;

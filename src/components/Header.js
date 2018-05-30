import React, { Component } from 'react';
import './Header.css';
import kLogo from '../img/k-caret.png';

class Header extends Component {
  render() {
    return (
        <div className="header">
            <img className="logo" src={kLogo} alt="Klogo" />
            <div className="title ">
                <h1>KAPLAN TPT</h1>
            </div>
            <div className="spacer" />
        </div>
    )
  }
}

export default Header;

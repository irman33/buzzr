import React, { Component } from 'react';
import PropTypes from 'prop-types';
import base  from '../base'
import Header from './Header';

class Login extends Component { 
    render() {
      return (
        <React.Fragment>
            <div className="top" id="top">
                <Header />
                <div id="topBody" className="topBody">
                </div>
                <button className="btn btn-primary" onClick={() => this.props.authenticate()}>Sign in to Play</button>
            </div>
            <div className="bottom" id="bottom">
                
            </div>
        </React.Fragment>
      );
    }
  }

  Login.propTypes = { 
    authenticate: PropTypes.func.isRequired
  }
  
  export default Login;
  
import React, { Component } from 'react';
import {  BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import base  from '../base'
import Header from './Header';

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
                <Header />
                <div id="topBody" className="topBody topBody--center">
                    <Link className='btn' to="/play">Play</Link>
                    <Link className='btn' to="/host">Host</Link>
                    <Link className='btn' to="/watch">Watch</Link>
                </div>
            </div>
            <div className="bottom" id="bottom">
                
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default Home;
  
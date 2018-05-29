import React, { Component } from 'react';
import base  from './base'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.updateSong = this.updateSong.bind(this);
    this.state = {
      songs: { }
    };
  }

  componentWillMount() {
    this.songsRef = base.syncState('songs', {
      context: this,
      state: 'songs'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.songsRef);
  }

  render() {
    return (
      <div class="game" id="gameArea">
        <div class="top" id="top">
            <div class="header">
                <img class="logo" src="./img/k-caret.png" alt="Klogo" />
                <div class="title ">
                    <h1>KAPLAN TPT</h1>
                </div>
                <div class="spacer" />
            </div>
        </div>
        <div class="bottom" id="bottom" />
      </div>
    );
  }
}

export default App;

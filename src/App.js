import React, { Component } from 'react';
import base  from './base'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addSong = this.addSong.bind(this);
    
    this.state = {
      songs: { }
    };
  }

  addSong(title) {
    const songs = {...this.state.songs};
    const id = Date.now()
    songs[id] = {
      id: id,
      title: title,
      chordpro: ''
    };

    this.setState({songs});
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
      <div className="game" id="gameArea">
        <div className="top" id="top">
            <div className="header">
                <img className="logo" src="./img/k-caret.png" alt="Klogo" />
                <div className="title ">
                    <h1>KAPLAN TPT</h1>
                </div>
                <div className="spacer" />
            </div>
        </div>
        <div className="bottom" id="bottom" />
      </div>
    );
  }
}

export default App;

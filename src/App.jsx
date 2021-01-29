import './App.css';
import React from 'react';
import Game from './frontend/game';

class App extends React.Component {
  render(){

    return (
        <div className="App">
          <Game />
        </div>
    );
  }
}

export default App;

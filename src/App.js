import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingScreen from './components/common/LoadingScreen';
import {Card, Button} from './components/common/'

class App extends Component {
  render() {
    const style = {
      background: "red",
      color: "white"
    }
    return (
      <div className="App">
        <header className="App-header">
          <Button>
            Hello
          </Button>
          <Button style={style} className='foo'>
            good Nye
          </Button>
        </header>
      </div>
    );
  }
}

export default App;

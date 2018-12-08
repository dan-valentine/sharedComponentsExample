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
<<<<<<< HEAD
          <Button>Logout</Button>
=======
          <textarea name='commentbox'/>
>>>>>>> 2559f05507ce7f37a1e769aa79c8af095a38a088
        </header>
      </div>
    );
  }
}

export default App;

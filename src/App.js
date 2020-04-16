import React from 'react';
import './App.css';
import Main from './components/Main.js';
import Aside from './components/aside.js'

class App extends React.Component {

  render() {
    return (
      <div>

        <header>
          <h1>Lighten Up Friend</h1>
          <h5>The world is meant to be fun!</h5>
        </header>

        <div>
          <Main />
        </div>

        <h1>Lets pray this worked!</h1>

      </div>
    )
  }
}

export default App;

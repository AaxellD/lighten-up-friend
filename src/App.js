import React from 'react';
import './App.css';
import Main from './components/Main.js';
import Aside from './components/aside.js'

class App extends React.Component {

  render() {
    return (
      <div>
        <aside className="aside">
        <Aside />
        </aside>

        <header>
          <h1>Lighten Up Friend</h1>
          <h5>The world is meant to be fun!</h5>
        </header>

        <div className="body">
          <Main />
        </div>
      </div>
    )
  }
}

export default App;

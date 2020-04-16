import React from 'react';
import './App.css';
import Main from './components/Main.js';
import Aside from './components/Aside.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'jokes...'
      },
      formInputs: {
        setup: null,
        delivery: null, 
        id: null
      }
    }
  }

  handleView = (view, jokeData) => {
    let pageTitle = '';
    let formInputs = {
      setup: '',
      delivery: '',
      id: null
    }
    switch (view) {
      case 'home':
        pageTitle = 'jokes...'
        break
      case 'addJoke':
        pageTitle = 'created jokes'
        break
      case 'editJoke':
        pageTitle = 'edited jokes'
        formInputs = {
          setup: jokeData.setup,
          delivery: jokeData.delivery,
          id: jokeData.id
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
        formInputs: formInputs
    })
  }


  render() {
    return (
      <div>

        <header>
          <h1>Lighten Up Friend</h1>
          <h5>The world is meant to be fun!</h5>
        </header>

        <div>
        <Aside handleView={this.handleView} />
          <Main 
            formInputs={this.state.formInputs}
            view={this.state.view}
            handleView={this.handleView}
          />
        </div>


      </div>
    )
  }
}

export default App;


import React from 'react'

class Aside extends React.Component {

  render() {
    return (
      <aside>

        {/* Menu List */}
        <h1>Joke Categories</h1>
        <ul>
          <li onClick={() => {
            this.props.handleView('home')
          }}>Home</li>

          <li onClick={() => { 
            this.props.handleView('addJoke') 
          }}>Add joke</li>

          <li onClick={() => { 
            this.props.handleView('editJoke') 
          }}>Edit joke</li>

          <li onClick={() => {
            this.props.handleView('jod')
          }}>Joke Of The Day</li>

          <li onClick={() => {
            this.props.handleView('animal')
          }}>Animal Joke of the Day </li>

          <li onClick={() => {
            this.props.handleView('blonde')
          }}>Blonde Joke of the Day </li>

          <li onClick={() => {
            this.props.handleView('knock')
          }}>Knock Knock Joke of the Day </li>
        </ul>

      </aside>
    )
  }
}

export default Aside

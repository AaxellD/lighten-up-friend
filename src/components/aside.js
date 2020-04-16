
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
            this.props.handleView('SubmitJoke')
          }}>Submit Joke</li>

          <li onClick={() => {
            this.props.handleView('GetJoke')
          }}>Get A Joke</li>

        </ul>

      </aside>
    )
  }
}

export default Aside

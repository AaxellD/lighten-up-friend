
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

        </ul>

      </aside>
    )
  }
}

export default Aside

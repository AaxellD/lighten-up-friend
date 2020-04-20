
import React from 'react'

class Aside extends React.Component {

  render() {
    return (
      <aside>

        {/* Menu List */}

    <nav>
        <button class='homeButton' onClick={() => {
            this.props.handleView('home')
          }}>HOME</button>


          <button class='addJokeButton'onClick={() => {
            this.props.handleView('addJoke')
          }}>ADD JOKE</button>


        </nav>

      </aside>
    )
  }
}

export default Aside

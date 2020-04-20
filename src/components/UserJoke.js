// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class UserJoke extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <article class='createJoke'>
        <div className="joke-body">
          <h3>{this.props.jokeData.setup}</h3>
          {this.props.jokeData.delivery}
        </div>
        <div className="joke-options">
          <ul>
            <li onClick={() => {
              this.props.handleView('editJoke',
              this.props.jokeData)}}>edit Joke</li>
            <li onClick={() => {this.props.handleDelete(this.props.jokeData.id)}}>delete Joke</li>
          </ul>
        </div>
      </article>

    )
  }
}

// =============================
// EXPORT
// =============================
export default UserJoke;

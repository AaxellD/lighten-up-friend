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
  render() {
    return (
      <article>
        <div className="joke-header">
          <h1>{this.props.jokeData.setup}</h1>
        </div>
        <div className="joke-body">
          {this.props.jokeData.delivery}
        </div>
        <div className="joke-options">
          <ul>
            <li onClick={() => { this.props.handleView('editjoke', this.props.jokeData) }}>edit Joke</li>
            <li onClick={() => { this.props.handleDelete(this.props.jokeData.id) }}>delete Joke</li>
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

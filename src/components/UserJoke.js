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
      <article>
        <div className="joke-header">
          <h1>{this.props.userJokeData.setup}</h1>
        </div>
        <div className="joke-body">
          {this.props.userJokeData.delivery}
        </div>
        <div className="joke-options">
          <ul>
            <li onClick={() => {
              this.props.handleView('edituserJoke', 
              this.props.userJokeData)}}>edit Joke</li>
            <li onClick={() => {this.props.handleDelete(this.props.userJokeData.id)}}>delete Joke</li>
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

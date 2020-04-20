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
        {/* <div className="joke-header">
          <h1>User Jokes</h1>
        </div> */}
        <div className="joke-body">
          {this.props.jokeData.setup}<br/>
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

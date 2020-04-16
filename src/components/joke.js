import React from 'react';

class Joke extends React.Component {
    render(){
        return (
            <article>
                <div className="joke-header">
                    <h2>{this.props.jokes.setup}</h2>
                </div>
                <div className="joke-body">
                    <p>{this.props.jokes.delivery}</p>
                </div>
            </article>
        )
    }
}

export default Joke;
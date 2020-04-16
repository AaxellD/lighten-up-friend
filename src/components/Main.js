import React from 'react';
import Jokes from './joke.js';

// let baseURL = '';
// if (process.env.NODE_ENV === 'development') {
//     baseURL = 'http://localhost:8000';
// } else {
//     console.log('This is for heroku')
// }

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
        }
    }
    fetchJokes = () => {
        fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&type=single%252Ctwopart", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
                "x-rapidapi-key": "717010dd4fmsh9df52870a541027p15f265jsn27c4cb8a9aad"
            }
        })
            .then(data => data.json())
            .then(jData => {
                this.setState({
                    jokes: jData
                })
            }).catch(err => {
                console.log(err);
            });
    }

    handleCreate = (createJoke) => {
        fetch("https://jokeapi-v2.p.rapidapi.com/submit", {
            "method": "PUT",
            "headers": {
                "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
                "x-rapidapi-key": "717010dd4fmsh9df52870a541027p15f265jsn27c4cb8a9aad",
                "content-type": "application/json",
                "accept": "application/json"
            },
            body:JSON.stringify(createJoke)
                // Example
            // "body": {
            //     "formatVersion": 2,
            //     "category": "Miscellaneous",
            //     "type": "single",
            //     "joke": "A horse walks into a bar...",
            //     "flags": {
            //         "nsfw": true,
            //         "religious": false,
            //         "political": true,
            //         "racist": false,
            //         "sexist": false
            //     }
            // }
        })
            .then( createdJoke => {
                console.log(createJoke);
            })
    }


    //=======| RENDER |========
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <button className="jokeButton" onClick={this.fetchJokes}>Get a Joke</button>
                <Jokes jokes={this.state.jokes} />
            </div>
        )
    }
    // Component end
}

export default Main;
import React from 'react';
import Jokes from './joke.js';
import Form from './Form.js';
import UserJoke from './UserJoke.js';

let baseURL= 'http://localhost:80';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:80';
} else {
    baseURL= 'https://lighten-up-api.herokuapp.com/'
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
            userjokes: []
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
        fetch(`${baseURL}/jokes`, {
          body: JSON.stringify(createJoke),
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
          .then(createdJoke => {
            return createdJoke.json();
          })
          .then(jsoneduserjoke => {
            this.props.handleView('home')
            this.setState(prevState => {
              prevState.userjokes = jsoneduserjoke
              return { userjokes: prevState.userjokes }
            })
          }).catch(err => console.log(err))
      }

    handleUpdate = (updateData) => {
        fetch(`${baseURL}/jokes/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updateJoke => {
            this.props.handleView('home')
            this.fetchJokes()
        }).catch((err) => console.log(err))
    }

    handleDelete = (id) => {
        fetch(`${baseURL}/jokes/${id}`,{
          method:'DELETE',
          headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
          }
        }).then(json => {
          this.setState(prevState => {
            const jokes = prevState.jokes.filter(joke => joke.id !==id)
            return {jokes}
          })
        }).catch(err => console.log(err))
      }
      
    //   render after parents
    componentDidMount(){
        this.fetchJokes()
    }

    //=======| RENDER |========
    render() {
        return (
            <>
            <div>
                <h1>Main Page</h1>
                <button className="jokeButton" onClick={this.fetchJokes}>Get a Joke</button>
                <Jokes jokes={this.state.jokes} userjokes={this.state.userjokes} />
        
            <h1>{this.props.view.pageTitle}</h1>

            {this.props.view.page === 'home' ? this.state.userjokes.map((jokeData) => (
              <UserJoke 
                key={jokeData.id}
                jokeData={jokeData}
                handleView = {this.props.handleView}
                handleDelete = {this.handleDelete}
              />
            )): <Form 
                  handleCreate={this.handleCreate}
                  handleUpdate={this.handleUpdate}
                  formInputs={this.props.formInputs}
                  view={this.props.view}
                />}
          </div>
          </>
        )
    }
    // Component end
}

export default Main;
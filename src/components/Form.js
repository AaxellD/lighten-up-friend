import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      setup: '',
      delivery: ''
    }
  }

  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.view.page === 'addJoke') {
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editJoke') {
      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      setup: this.props.formInputs.setup,
      delivery: this.props.formInputs.delivery
    })
  }

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label class='setup'>
          Setup
          <input class='placerholderSetup' type="text" placeholder="your setup" id="setup" value={this.state.setup} onChange={this.handleChange}/>
        </label>
        <label class='delivery'>
          Delivery
          <input class='placerholderDelivery' type="text" placeholder="your delivery" id="delivery" value={this.state.delivery} onChange={this.handleChange}/>
        </label>
        <input class='formButton' type="submit" value="Add joke"/>
      </form>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form

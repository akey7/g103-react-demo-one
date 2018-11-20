import React, { Component } from 'react'

class AddItem extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    console.log(`I would submit now.`)
  }
  
  render() {
    return (
      <div>
        <h3>Add an item!</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input />
          </div>
          <div>
            <label>Reason: </label>
            <input />
          </div>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default AddItem

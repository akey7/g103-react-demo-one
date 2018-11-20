import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 0, item: 'Old AM radio.', reason: 'Hear crackles in the summer.' },
        { id: 1, item: 'Shovel', reason: 'Because I hate telephone wires.' },
        { id: 2, item: '2m/70cm dual band transceiver', reason: 'Because MORE RADIOS!'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <p>MORE COMPONENTS!!!!!!!!!!!!!</p>
      </div>
    )
  }
}

export default App

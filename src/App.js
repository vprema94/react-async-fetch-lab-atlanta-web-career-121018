import React, { Component } from 'react'

class App extends Component {

  state = {
      peeps: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ peeps: people }))
  }

  render() {
   return (
     <div>
       {this.state.peeps.map((person) => <h1>{person.name}</h1>)}
     </div>
   )
 }

}

export default App
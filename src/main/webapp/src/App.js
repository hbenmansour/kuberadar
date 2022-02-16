import React, {Component} from 'react';
import Distribs from './components/distribs'

class App extends Component {
  state = {
    distribs: []
  }

  componentDidMount() {
    fetch('/distribs')
    .then(res => res.json())
    .then((data) => {
      this.setState({ distribs: data._embedded.distribs })
    })
    .catch(console.log)
  }

  render () {
    return (
      <Distribs distribs={this.state.distribs} />
    );
  }
}

export default App;
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexi from './Flexi';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      person_name: '',
      states: ''
    }
  }
  onFlexiSubmit = (state) => {
    alert('The Form data:' + JSON.stringify(state))
    this.setState({
      person_name: state.person_name,
      states: state.states
    })
  }
  render() {
    const flexiConfig = {
      items: [
        {
          "name": "person_name",
          "label": "Person's Name",
          "type": 'TextField',
        },
        {
          "name": "states",
          "label": "Person's state",
          "type": "select",
          "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
          ]
        }
      ]
    };
    return (
      <div className="App">
        {/* sending flexiConfig object as prop to the child component
          Lifting up the state(sending parent state object to the child rather than re-declaring in child component) */}
        <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig} stateObj={this.state} />
      </div>
    );
  }
}

export default App;

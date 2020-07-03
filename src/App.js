import React from 'react';
import './App.css';
import Flexi from './components/Flexi'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      person_name: '',
      states: ''
    }
  }
  onFlexiSubmit = (state) =>{
    this.setState({
      person_name:state.person_name,
      states: state.states
    })

  }
  render(){
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
          Lifting up the state */}
     <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig} stateObj={this.state}/>
    </div>
  );
}
}

export default App;

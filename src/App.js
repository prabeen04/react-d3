import React, { Component } from 'react';
import './App.css';
import BarChart from './components/barChart';
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <BarChart  data={[5,10,1,3]} size={[500,500]}/>
      </div>
    );
  }
}

export default App;

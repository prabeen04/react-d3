import React, { Component } from 'react';
import './App.css';
import BarChart from './components/barChart';
import data from './components/data';
class App extends Component {
  render() {
    console.log(d3-scale)
    return (
      <div className="App">
        <BarChart data={data}/>
      </div>
    );
  }
}

export default App;

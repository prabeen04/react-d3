import React, { Component } from 'react';
import './App.css';
import BarChart from './components/barChart';
import data from './components/data';
class App extends Component {
  constructor(props){
    super(props)

    this.state = { screenWidth: 1000, screenHeight: 500, hover: "none", brushExtent: [0,40] }
  }
  render() {
    return (
      <div className="App">
        <BarChart data={data} size={[this.state.screenWidth / 2, this.state.screenHeight / 2]}/>
      </div>
    );
  }
}

export default App;

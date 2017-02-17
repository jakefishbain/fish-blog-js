import React, { Component } from 'react';
import './App.css';
import BlogHeader from './BlogHeader';
import BlogInputs from './BlogInputs'

class App extends Component {
  //CONSTRUCTOR FOR STATE

  render() {
    return (
      <div className="App">
        <BlogHeader/>
        <BlogInputs/>
      </div>
    );
  }
}

export default App;

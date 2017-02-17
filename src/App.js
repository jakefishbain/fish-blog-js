import React, { Component } from 'react';
import './App.css';
import BlogHeader from './BlogHeader';

class App extends Component {
  //CONSTRUCTOR FOR STATE

  render() {
    return (
      <div className="App">
        <BlogHeader/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Search from './Search';
import Video from './Video';
import ToWatch from './ToWatch';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className='title'>Learn The Things</h1>
        <Search />
        <Video />
        <ToWatch />
      </div>
    )
  }
}

export default App;

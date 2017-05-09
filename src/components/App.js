import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import Video from './Video';
import ToWatch from './ToWatch';

class App extends Component {
  render() {
    console.log(this.props.state);
    return (
      <div className='App'>
        <h1 className='title'>Learn The Things</h1>
        <Search />
        <Video />
        <ToWatch watchlist={this.props.state.ToWatch}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(App);

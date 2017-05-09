import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadResults } from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  search() {
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = 'AIzaSyA9CsgQTJsl1ai0bp0rxO-3L4Bo_LzZK0Q';
    let search_url = `${BASE_URL}?part=snippet&q=${this.state.query}&type=video&key=${API_KEY}`;
    fetch(search_url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.props.loadResults(json.items);
    });
  }
  render() {
    return (
      <div className="search">
        <input
          placeholder="What?"
          onChange={event => this.setState({query: event.target.value})}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => this.search()}
        >
          Search
        </button>
      </div>
    )
  }
}

export default connect(null, { loadResults })(Search);

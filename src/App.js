import React, { Component } from 'react';

class App extends Component {
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
      console.log(json);
    });
  }
  render() {
    console.log(this.state.query);
    return (
      <div className='App'>
        <div className='title'>
          <h1>Learn The Things</h1>
        </div>
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
        <iframe
          src="https://www.youtube.com/embed/NybHckSEQBI?autoplay=1&origin=http://example.com"
          frameBorder="0"
          id="ytplayer"
          width="640"
          height="360"
        ></iframe>
        <div className="to-watch">
          <h3>To Watch</h3>
          <ul>
            <li>
              <strong>Title:</strong>  <a>Geometry basics</a> - <strong>Category:</strong> math
            </li>
            <li>
              <strong>Title:</strong> <a>WW2 history</a> - <strong>Category:</strong> history
            </li>
            <li>
              <strong>Title:</strong> <a>Basics of Physcis</a> - <strong>Category:</strong> science
            </li>
            <li>
              <strong>Title:</strong> <a>Javascript basics</a> - <strong>Category:</strong> computer science
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;

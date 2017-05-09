import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadResults } from '../actions';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      modalIsOpen: false,
      searchResults: null
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      this.setState({searchResults: json.items});
    });
  }
  openModal() {
  this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
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
          onClick={() => {
            this.search();
            this.openModal();
          }}
        >
          Search
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Search Results"
        >
          <h3>Search Results</h3>
          <ul className="search-results">
            {
              this.state.searchResults !== null
                ?
                  this.state.searchResults.map(item => {
                    return (
                      <li key={item.etag}>
                        <a target="_blank" href={'https://www.youtube.com/watch?v=' + item.id.videoId}>{item.snippet.title}</a>
                      </li>
                    )
                  })
                :
                  <div></div>
            }
          </ul>
        </Modal>
      </div>
    )
  }
}

export default connect(null, { loadResults })(Search);

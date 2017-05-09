import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentVideo } from '../actions';

class ToWatch extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="To-Watch">
        <h3>To Watch</h3>
        <ul className="watch-list">
          {
            this.props.watchlist.length > 0
              ?
                this.props.watchlist.map(item => {
                  return (
                    <li key={item.etag}>
                      <a
                        onClick={() => this.props.setCurrentVideo(item.id.videoId)}
                      >
                        {item.snippet.title}
                      </a>
                    </li>
                  )
                })
              :
                <div></div>
            }
        </ul>
      </div>
    )
  }
}

export default connect(null, { setCurrentVideo })(ToWatch);

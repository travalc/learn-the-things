import React, { Component } from 'react';

class Video extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Video">
        <iframe
          src={`https://www.youtube.com/embed/${this.props.video}?autoplay=1&origin=http://example.com`}
          frameBorder="0"
          id="ytplayer"
          width="640"
          height="360"
        ></iframe>
      </div>
    )
  }
}

export default Video;

import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div className="Video">
        <iframe
          src="https://www.youtube.com/embed/NybHckSEQBI?autoplay=1&origin=http://example.com"
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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library">
        <h1>Choose an album!</h1>
        {
          this.state.albums.map( (album, index) =>
            <div className="album-container" key={index}>
              <div className="album-link">
                <Link to={`/album/${album.slug}`}>
                  <img src={album.albumCover} alt={album.title} />
                </Link>
              </div>
              <div className="album-info">
                <p>{album.title}</p>
                <p>{album.artist}</p>
                <p>{album.songs.length} songs</p>
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

export default Library;

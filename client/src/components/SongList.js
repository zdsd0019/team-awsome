import React from 'react';
import './SongList.scss';

import { Link } from 'react-router-dom';

class SongList extends React.Component {
  render() {
    return (
      <ol className="song-list">
        {(this.props.songs || []).map((song) => {
          return (
            <li className="song-list__item" key={song.id}>
              <div className="song-list__name-artist">
                <span className="song-list__name">{song.title}</span><span>{song.artist ? ' | ' : ''}</span>
                <span className="song-list__artist">{song.artist}</span>
              </div>
              <span className="song-list__release">{song.releaseDate}</span>
              <Link to={`/${song.id}/lyrics`}>
                <button className="song-list__show-lyrics">Show Lyrics</button>
              </Link>
            </li>
          );
        })}
      </ol>
    );
  }
}

export default SongList;
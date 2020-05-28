import React from 'react';
import './LyricsPage.scss';
import axios from 'axios';

class LyricsPage extends React.Component {
  state = {
    song: {
      title: 'loading...',
      lyrics: 'loading...'
    }
  }
  
  componentDidMount() {
    const { match } = this.props;
    if (match && match.params.songId) {
      Promise.all([
        this.getSongDetails(match.params.songId),
        this.getSongLyrics(match.params.songId)
      ]).then(data => {
        const songDetails = data[0].data;
        const songLyrics = data[1].data;
        this.setState({
          song: Object.assign(songDetails, {
            lyrics: songLyrics
          })
        });
      }).catch((err) => {
        this.setState({
          error: err
        });
      });
    }
  }

  getSongDetails(songId) {
    return axios.get(`http://localhost:5000/songs/${songId}`);
  }

  getSongLyrics(songId) {
    return axios.get(`http://localhost:5000/songs/${songId}/lyrics`);
  }

  render() {
    const { match } = this.props;
    // FIXME: patch up the error message below
    const show = this.state.error ? match.params.songId : (
      <>
        <h3>{this.state.song.title}</h3>
        <p className="lyrics-page__lyrics">{this.state.song && this.state.song.lyrics ? this.state.song.lyrics : 'No lyrics available.'}</p>
      </>
    );

    return (
      <main className="lyrics-page">
        {show}
      </main>
    );
  }
}

export default LyricsPage;
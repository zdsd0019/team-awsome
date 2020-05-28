import React from 'react';
import './HomePage.scss';
import axios from 'axios';

// other components
import SongList from '../components/SongList';

class HomePage extends React.Component {
  state = {
    songs: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/songs').then((resp) => {
      if (resp) {
        this.setState({
          songs: resp.data
        });
      }
    });
  }

  render() {
    return (
      <main className="home-page">
        <h1>Song List</h1>
        <SongList songs={this.state.songs}></SongList>
      </main>
    );
  }
}

export default HomePage;
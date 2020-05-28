import React from 'react';
import './App.scss';

// router stuff
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LyricsPage from './pages/LyricsPage';

// pages

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/:songId/lyrics" component={LyricsPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

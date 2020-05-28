const express = require('express');
const router = express.Router();
const songsList = require('../data/songs.json');
const fs = require('fs');

router.get('/', (req, res) => {
  res.status(200).json(songsList);
});

router.get('/:id', (req, res) => {
  const search = songsList.find((song) => song.id == req.params.id);
  if (search) {
    res.status(200).json(search);
  } else {
    res.status(400).json({
      error: 'Song not found'
    });
  }
});

router.get('/:id/lyrics', (req, res) => {
  const search = songsList.find((song) => song.id == req.params.id);
  // FIXME: what happens if the lyricsFile property doesn't exist? what condition could you add to the if statement below...
  if (search) {
    // FIXME: what happens if a file doesn't exist?
    const fContents = fs.readFileSync(`data/lyrics/${search.lyricsFile}`, 'utf8');
    res.status(200).send(fContents);
  } else {
    res.status(400).json({
      error: 'Unable to find song or lyrics'
    });
  }
});

module.exports = router;
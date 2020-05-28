// express config
const express = require('express');
const cors = require('cors');
const app = express();
const sPort = 5000;
const songRoutes = require('./routes/songRoutes');

// load middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/songs', songRoutes);

app.listen(sPort, () => {
  console.log('server is running on port ' + sPort);
});
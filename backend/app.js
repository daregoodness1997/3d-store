require('dotenv').config();
require('http-status-codes');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(helmet());
app.use(cors());

const dalleRoutes = require('./routes/dalle.routes');

app.get('/', (req, res) => {
  res.send('3D Store API');
});

app.use('/api/v1/dalle', dalleRoutes);

const PORT = 8080 || process.env.PORT;

const start = () => {
  app.listen(PORT, () => {
    try {
      console.log('listening on port ' + PORT);
    } catch (err) {
      console.error(err);
    }
  });
};

start();

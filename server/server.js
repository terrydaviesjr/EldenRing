// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
// get MongoDB driver connection
const dbo = require('./db/conn');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes/ItemController'));
app.use(require('./routes/NpcController'));

const indexPath = path.join(__dirname, '..', 'angular', 'dist', 'angular');

app.use(express.static(indexPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(indexPath, 'index.html'));
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
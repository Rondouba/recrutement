/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
const http = require('http');
require('./config');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initDB } = require('./db');

const app = express();
// const authRoutes = require('./routes/auth.routes');
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
initDB()
  .then(() => {
    const { runMigration } = require('./model');
    return runMigration();
  })
  .then(() => {
    // const app = require('./app');
    const authRoutes = require('./routes/auth.routes');
    app.use('/auth', authRoutes);

    const port = process.env.PORT || '8000';
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port);
    server.on('error', (err) => {
      console.error(err);
    });
    server.on('listening', () => {
      console.log(`Serveur en marche sur http://127.0.0.1:${server.address().port}`);
    });
    app.use('/authc', (req, res) => { res.status(200).json({ msg: 'tes' }); });
  })
  .catch((err) => {
    console.error(err);
  });

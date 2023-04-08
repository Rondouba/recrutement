/* eslint-disable import/no-extraneous-dependencies */
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');

const app = express();

// Tous les  middlewares
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRoutes);
module.exports = app;

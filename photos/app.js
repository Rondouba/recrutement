/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
// const bodyParser = require('body-parser');
const cors = require('cors');
const {
  getAuthMiddleware,
  getRedisRequestMiddleware,
  getRedisResponseMiddleware,
} = require('u-server-utils');
const validate = require('./util/authValidator');

const photoRoutes = require('./routes/photo.routes');

const app = express();

const expressSwagger = require('express-swagger-generator')(app);

// all middlewares
app.use(logger('dev'));
app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Max-Age', 1728000);
//   next();
// });
app.use(cors(
  {
    origin: '*',
    credentials: true,
  },
));

const options = {
  swaggerDefinition: {
    info: {
      description: 'Photos Internal Service for Indeed',
      title: 'Photos Internal Service',
      version: '1.0.0',
    },
    host: '127.0.0.1:7005',
    produces: ['application/json'],
    schemes: ['http'],
  },
  // eslint-disable-next-line no-undef
  basedir: __dirname,
  files: ['./routes/**/*.js'], // Path to the API handle folder
};

expressSwagger(options);

app.use(getAuthMiddleware(validate));
app.use(getRedisRequestMiddleware('photos'));
app.use(getRedisResponseMiddleware('photos'));

app.use('/photos', photoRoutes);

module.exports = app;

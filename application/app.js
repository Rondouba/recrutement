/* eslint-disable import/order */
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
// const bodyParser = require('body-parser');
// const acl = require('./acl');
const {
  getAuthMiddleware,
  getRedisRequestMiddleware,
  getRedisResponseMiddleware,
} = require('u-server-utils');

const applicationRouter = require('./routes/application.route');

const app = express();

const expressSwagger = require('express-swagger-generator')(app);
const cors = require('cors');
const validate = require('./util/authValidator');

// tous les middlewares
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
      description: 'Information sur la candidature d emploi sur le serveur de Khideme',
      title: 'Information sur le serveur de candidature',
      version: '1.0.0',
    },
    host: '127.0.0.1:7003',
    produces: ['application/json'],
    schemes: ['http'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: 'JWT auth token',
      },
    },
  },
  // eslint-disable-next-line no-undef
  basedir: __dirname,
  files: ['./routes/**/*.js'], // Path to the API handle folder
};

expressSwagger(options);

app.use(getAuthMiddleware(validate));
app.use(getRedisRequestMiddleware('application'));
app.use(getRedisResponseMiddleware('application'));
// app.use(getAccessMiddleware(acl));

app.use('/applications', applicationRouter);

module.exports = app;

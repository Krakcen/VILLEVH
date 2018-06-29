/* eslint-disable no-console */

// Init Logger
const logger = require('winston');

// Create App Instance
const app = require('./app');
const port = app.get('port');

// Create Server Instance
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);

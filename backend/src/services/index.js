const flickr = require('./flickr/flickr.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(flickr);
};

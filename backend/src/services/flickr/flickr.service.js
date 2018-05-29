// Initializes the `flickr` service on path `/flickr`
const createService = require('feathers-memory');
const hooks = require('./flickr.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'flickr',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/flickr', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('flickr');

  service.hooks(hooks);
};

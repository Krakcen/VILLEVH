const assert = require('assert');
const app = require('../../src/app');

describe('\'flickr\' service', () => {
  it('registered the service', () => {
    const service = app.service('flickr');

    assert.ok(service, 'Registered the service');
  });
});

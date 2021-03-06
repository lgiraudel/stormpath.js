'use strict';

var stormpath = require('../common').stormpath;

describe('lib', function () {

  it('should be an object', function () {
    expect(typeof stormpath).to.equal('object');
  });

  it('should export Client constructor', function () {
    expect(typeof stormpath.Client).to.equal('function');
  });

});

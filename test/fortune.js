'use strict';

var expect = require('chai').expect,
  Lab = require('lab'),
  server = require('../server');

var lab = exports.lab = Lab.script();

/** 
 * Set up BDD like function calls...
 */
var describe = lab.describe,
  it = lab.it,
  before = lab.before,
  beforeEach = lab.beforeEach,
  after = lab.after,
  afterEach = lab.afterEach;

/** 
 * Tests...
 */
describe('Fortune page', function() {
  it('returns fortune template with header successfully', function (done) {
    var options = {
      method: 'GET',
      url: '/fortune'
    };

    server.inject(options, function(siResponse) {
      expect(siResponse.statusCode).to.equal(200);
      expect(siResponse.headers['content-type']).to.equal('text/html');
      expect(siResponse.payload).to.contain('<h1>Fortune</h1>');
      done();
    });
  });

  it('returns html with predefined users included', function (done) {
    var options = {
      method: 'GET',
      url: '/fortune'
    };

    server.inject(options, function(siResponse) {
      expect(siResponse.statusCode).to.equal(200);
      expect(siResponse.headers['content-type']).to.equal('text/html');
      expect(siResponse.payload).to.contain('Bobby');
      expect(siResponse.payload).to.contain('Susie');
      expect(siResponse.payload).to.contain('Fred');
      expect(siResponse.payload).to.contain('James');
      done();
    });    
  });
});
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
describe('Main server routes', function () {
  it('root returns index template with title successfully', function (done) {
    var options = {
      method: 'GET',
      url: '/'
    };

    server.inject(options, function(siResponse) {
      expect(siResponse.statusCode).to.equal(200);
      expect(siResponse.headers['content-type']).to.equal('text/html');
      expect(siResponse.payload).to.contain('<title>Hapi-Handlebars</title>');
      done();
    });
  });

  it('/fortune returns fortune template with and title header successfully', function (done) {
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

});
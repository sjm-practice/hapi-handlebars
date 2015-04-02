'use strict';

var Hapi = require('hapi');

/** 
 * Create and setup new Hapi server.
 */
var server = new Hapi.Server();
server.connection({
  port: 3000
});

server.views({
  engines: {
    html: require('handlebars')
  },
  path: './views',
  layoutPath: './views/layout',
  layout: 'default',
  helpersPath: './views/helpers'
  //partialsPath: 'views/partials'
});

/** 
 * Set up server routes.
 */
server.route({
  path: '/',
  method: 'GET',
  handler: function (request, reply) {
    var templateData = {
      title: 'This is Index!',
      message: 'Hello, World! via handlebars template'
    };

    return reply.view('index', templateData);
  }
});

server.route({
  path: '/fortune',
  method: 'GET',
  handler: {
    view: {
      template: 'fortune',
      context: { pageHeader: 'Fortune' }
    }
  }
});

module.exports = server;

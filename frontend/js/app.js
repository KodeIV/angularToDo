/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */

var Hapi = require('hapi');
var server = Hapi.server(+process.env.PORT, '0.0.0.0', {

        cors: true,
        debug: {
            request: ['error']
        }
    });

server.start(function(){
	console.log('Server running at:', server.info.uri);
});

angular.module('todomvc', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/', {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html'
		}).when('/:status', {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html'
		}).otherwise({
			redirectTo: '/'
		});
	});



(function() {
	'use strict';

	angular.module('test', [
	  'ionic',
	  'test.routes',

	  'test.menu.controller',
		'test.home.controller',
	  
		'test.mock.service',
	  'test.storage.service'
	]);

}());
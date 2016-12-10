(function() {
	'use strict';

	angular.module('test.routes', ['ui.router'])
	.config(config);

	function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
		$urlRouterProvider.otherwise('/app/home');
		// $ionicConfigProvider.views.transition('platform');

		$stateProvider
			.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'app/menu/menu.view.html',
			controller: 'MenuController',
			controllerAs: 'vm'
		})

		.state('app.home', {
			url: '/home',
			views: {
				'contentMenu': {
					templateUrl: 'app/home/home.view.html',
					controller: 'HomeController',
					controllerAs: 'vm'
				}
			}
		});
	}

}());
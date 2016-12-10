(function() {
	'use strict';

	angular.module('test.run', [])
	.run(run);

	function run($ionicPlatform, $rootScope, $state, $stateParams) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if(window.StatusBar) StatusBar.styleDefault();
		});
	}
	
}());

(function() {
	'use strict'

	angular.module('test.home.controller', [])
	.controller('HomeController', homeController);

	homeController.$inject = ['$log', 'MockService'];
	function homeController($log, MockService) {
		var vm = this;
		vm.data = MockService.getData();

		$log.log(vm.data);
	}

}());
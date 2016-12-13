(function() {
	'use strict'

	angular.module('test.home.controller', [])
	.controller('HomeController', homeController);

	homeController.$inject = ['$log', '$scope', '$ionicPopover', 'MockService'];
	function homeController($log, $scope, $ionicPopover, MockService) {
		
		var vm = this;
		vm.data = MockService.getData();
		vm.sortProsCons = sortProsCons;

		$scope.popover = loadPopover();
		$scope.openPopover = openPopover;
		$scope.closePopover = closePopover;

		/* Functions */
		function sortProsCons(prosCons) {
			return null;
		}

		/* Popover */
		function loadPopover() {
		  return $ionicPopover.fromTemplateUrl('app/home/popover.view.html', {
		    scope: $scope,
		  }).then(function (popover) {
		    $scope.popover = popover;
		  });
		}

		function openPopover($event) {
			$scope.popover.show($event);
		}

		function closePopover () {
			$scope.popover.hide();
		}
	}

}());
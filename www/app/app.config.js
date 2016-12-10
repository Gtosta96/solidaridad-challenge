(function(){
	'use strict'

	angular.module('test.config', ['chart.js'])
	.config(charts);

	function charts(ChartJsProvider) {
		var Provider = ChartJsProvider.$get();
		Provider.Chart.defaults.global.colors = [ '#92c25c', '#005e6e', '#000', '#000', '#000' ];
	}

}());
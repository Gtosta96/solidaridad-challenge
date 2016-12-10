(function() {
	'use strict'

	angular.module('test.mock.service', [])
	.factory('MockService', mockService);

	function mockService() {
	  return {
	    getData: getData
	  }

	  function getData() {
	    return {
	      user: {
					id: 1,
	        firstName: 'Gabriel',
	        lastName: 'Tosta',
	        get fullName() {
	          return this.firstName + ' ' + this.lastName;
	        },
	        farm: {
	          farmName: 'Recanto feliz',
	          banner: {
	            src: 'img/banner-farm.jpg'
	          }
	        },
					reports: {
						performance: {
							0: {
								title: 'Pilar Econômico',
								data: '0 - performance'
							},
							1: {
								title: 'Pilar Ambiental',
								data: '1 - performance'
							},
							2: {
								title: 'Pilar Social',
								data: '2 - performance'
							}
						}
					}
	      }
	    }
	  }
	}

}());
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
	          0: {
	            title: 'Performance - Visão Geral',
	            description: 'Aqui serão demonstradas as visões gerais em relação a Performance',
	            data: [{
	              title: 'Pilar Econômico',
	              content: '0 - performance',
	              chart: {
	                series: ['2015', '2016'],
	                labels: ['Informação 01', 'Informação 02', 'Informação 03'],
	                data: [
	                  [65, 60, 80],
	                  [49, 70, 70]
	                ]
	              },
	              prosCons: {
	                pros: ['Pros 1', 'Pros 2'],
	                cons: ['Cons 1', 'Cons 2'],
	              }
	            }, {
	              title: 'Pilar Ambiental',
	              content: '1 - performance',
	              chart: {
	                series: ['2015', '2016'],
	                labels: ['Informação 01', 'Informação 02', 'Informação 03'],
	                data: [
	                  [65, 60, 80],
	                  [49, 70, 70]
	                ]
	              },
	              prosCons: {
	                pros: ['Pros 1', 'Pros 2'],
	                cons: ['Cons 1', 'Cons 2'],
	              }
	            }, {
	              title: 'Pilar Social',
	              content: '2 - performance',
	              chart: {
	                series: ['2015', '2016'],
	                labels: ['Informação 01', 'Informação 02', 'Informação 03'],
	                data: [
	                  [65, 60, 80],
	                  [49, 70, 70]
	                ]
	              },
	              prosCons: {
	                pros: ['Pros 1', 'Pros 2'],
	                cons: ['Cons 1', 'Cons 2'],
	              }
	            }]
	          },
	          1: {
	            title: 'Suas Respostas',
	            description: 'Aqui serão demonstradas suas respostas em relação ao [...]'
	          }
	        },
	      }
	    }
	  }
	  }


}());
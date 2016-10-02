(function() {
	'use strict';

	angular.module('app')
	.directive('foundItems', foundItemsDirective);

	function foundItemsDirective() {
		var DDO = {
			restrict: 'E',
			scope: {
				foundItems: '<',
				onRemove: '&'
			},
			templateUrl: 'partials/foundItems.html'
		};

		return DDO;
	}

})();
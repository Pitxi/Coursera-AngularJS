(function() {
	'use strict';

	angular.module('app')
	.directive('foundItems', foundItemsDirective);

	function foundItemsDirective() {
		function foundItemsDirectiveCtrl($scope) {
			var ctrl = this;

			ctrl.removeItem = function(index) {
				ctrl.onRemove({ index: index});
			}
		}

		var DDO = {
			restrict: 'E',
			scope: {
				foundItems: '<',
				onRemove: '&'
			},
			controller: foundItemsDirectiveCtrl,
			controllerAs: 'ctrl',
			bindToController: true,
			templateUrl: 'partials/foundItems.html'
		};

		return DDO;
	}

})();
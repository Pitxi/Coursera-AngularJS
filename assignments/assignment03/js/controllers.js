(function() {
	'use strict';

	angular.module('app')
	.controller('NarrowItDownController', NarrowItDownController);

	NarrowItDownController.$inject = [ 'MenuSearchService' ];
	function NarrowItDownController(MenuSearchService) {
		var ctrl = this;

		ctrl.searchTerm = '';

		ctrl.searchItems = function() {
			if (!ctrl.searchTerm) {
				ctrl.found = [];
				return;
			}

			MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
			.then(function(response) {
				console.log(response);
				ctrl.found = response;
			});
		};

		ctrl.removeItem = function(index) {
			ctrl.found.splice(index, 1);

			// If all items are removed remove the array, so no "no found" message is shown.
			if (ctrl.found.length == 0) {
				delete ctrl.found;
			}
		}
	}

})();
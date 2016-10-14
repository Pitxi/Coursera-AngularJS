(function() {
'use strict';

	angular.module('MenuApp')
	.component('items', {
		templateUrl:'partials/items.component.template.html',
		controller: ItemsComponentController,
		bindings: {
			itemsList: '<'
		}
	});

	function ItemsComponentController() {
		var ctrl = this;



		ctrl.$onInit = function() { };
		ctrl.$onChanges = function(changesObj) { };
		ctrl.$onDestory = function() { };
	}
})();
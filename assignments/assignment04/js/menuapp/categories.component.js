(function() {
'use strict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl:'partials/categories.component.template.html',
		controller: CategoriesComponentController,
		bindings: {
			categoriesList: '<'
		}
	});

	function CategoriesComponentController() {
		var ctrl = this;

		ctrl.$onInit = function() { };
		ctrl.$onChanges = function(changesObj) { };
		ctrl.$onDestory = function() { };
	}
})();
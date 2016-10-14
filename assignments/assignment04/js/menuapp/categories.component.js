(function() {
'use strict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl:'partials/categories.component.template.html',
		bindings: {
			categoriesList: '<'
		}
	});
})();
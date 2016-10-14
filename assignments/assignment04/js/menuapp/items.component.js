(function() {
'use strict';

	angular.module('MenuApp')
	.component('items', {
		templateUrl:'partials/items.component.template.html',
		bindings: {
			itemsList: '<'
		}
	});
})();
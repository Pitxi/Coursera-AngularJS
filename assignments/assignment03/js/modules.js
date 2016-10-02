(function() {
	'use strict';

	angular.module('app', [])
	.constant('ITEMS_URL', 'https://davids-restaurant.herokuapp.com/menu_items.json');
})();
(function() {
	'use strict';

	angular.module('app')
	.service('MenuSearchService', MenuSearchService);

	MenuSearchService.$inject = [ 'ITEMS_URL', '$http' ];
	function MenuSearchService(ITEMS_URL, $http)
	{
		var service = this;

		service.getMatchedMenuItems = function(searchTerm)
		{
			return $http({
				method: 'GET',
				url: ITEMS_URL
			})
			.then(function(response) {
				return response.data.menu_items
				.filter(function(item) {
					var regexp = new RegExp(searchTerm, 'i');

					return item.description.match(regexp);
				})
			})
		}
	}

})();
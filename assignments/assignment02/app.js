(function() {

	'use strict';

	angular.module('app', [])
	.service('shoppingListService', shoppingListService)
	.controller('toBuyShoppingListCtrl', toBuyShoppingListCtrl)
	.controller('boughtShoppingListCtrl', boughtShoppingListCtrl)

	function shoppingListService() {
		var service = this;

		service.toBuyItems = [
			{ name: 'Chocolate Cookies', quantity: 10 },
			{ name: 'Sugary drinks'    , quantity: 15 },
			{ name: 'Vanilla Cookies'  , quantity: 5  },
			{ name: 'snacks'           , quantity: 3  }
		];

		service.boughtItems = [];


		/**
		 * Buy the especified item.
		 * @param  {number} itemIndex
		 */
		service.buyItem = function(itemIndex) {
			service.boughtItems.push(service.toBuyItems.splice(itemIndex, 1)[0]);
		};
	}

	toBuyShoppingListCtrl.$inject = [ 'shoppingListService' ];
	function toBuyShoppingListCtrl(shoppingListService) {
		var toBuyCtrl = this;

		toBuyCtrl.emptyMessage = "Everything is bought!"
		toBuyCtrl.itemList = shoppingListService.toBuyItems;

		toBuyCtrl.buyItem = shoppingListService.buyItem;
	}
	boughtShoppingListCtrl.$inject = [ 'shoppingListService' ];
	function boughtShoppingListCtrl(shoppingListService) {
		var boughtCtrl = this;

		boughtCtrl.emptyMessage = "Nothing bought yet."
		boughtCtrl.itemList = shoppingListService.boughtItems;
	}

})();
(function() {
	'use strict';

	angular.module('Launch', [])
	.controller('LaunchCtrl', LaunchCtrl);

	LaunchCtrl.$inject = [ '$scope' ];
	function LaunchCtrl($scope)
	{
		$scope.foodStr = '';
		$scope.message = '';

		/**
		 * Set the message according to the number of comma separated items.
		 */
		$scope.setMessage = function()
		{
			// Splitting the string ignoring whitespaces and removing empty values.
			var foodList   = $scope.foodStr.split(/\s*,\s*/).filter(String);

			console.log(foodList);

			switch (foodList.length) {
				case 0:
					$scope.message = 'Please enter data first';
					break;
				case 1:
				case 2:
				case 3:
					 $scope.message = 'Enjoy!';
					 break;
				default:
					$scope.message = 'Too much!';
			}
		}
	}

})();
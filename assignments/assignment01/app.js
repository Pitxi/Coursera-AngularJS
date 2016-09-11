(function() {
	'use strict';

	angular.module('Launch', [])
	.controller('LaunchCtrl', LaunchCtrl);

	LaunchCtrl.$inject = [ '$scope' ];
	function LaunchCtrl($scope)
	{
		$scope.foodStr  = '';
		$scope.messages = {
			empty  : { text: 'Please enter data first', class: 'color-red'   },
			enjoy  : { text: 'Enjoy!'                 , class: 'color-green' },
			tooMuch: { text: 'Too much!'              , class: 'color-green' }
		}

		/**
		 * Set the message according to the number of comma separated items.
		 */
		$scope.setMessage = function()
		{
			// Splitting the string ignoring whitespaces and removing empty values.
			var foodList = $scope.foodStr.split(/\s*,\s*/).filter(String);

			// Format the input string.
			$scope.foodStr = foodList.join(', ').trim();

			// Set the message
			switch (foodList.length) {
				case 0:
					$scope.message = $scope.messages.empty;
					break;
				case 1:
				case 2:
				case 3:
					 $scope.message = $scope.messages.enjoy;
					 break;
				default:
					$scope.message = $scope.messages.tooMuch;
			}
		}
	}

})();
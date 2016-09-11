(function() {
	'use strict';

	angular.module('UpperCaseInput', [])
	.controller('UpperCaseInputCtrl', UpperCaseInputCtrl)

	UpperCaseInputCtrl.$inject = ['$scope', '$filter']
	function UpperCaseInputCtrl($scope, $filter)
	{
		$scope.name = 'chiqui';

		$scope.upper = function()
		{
			var upCase = $filter('uppercase');

			$scope.name = upCase($scope.name);
		}
	}

})();
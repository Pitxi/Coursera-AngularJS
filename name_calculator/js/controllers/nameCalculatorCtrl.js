(function() {

angular.module('nameCalculator')
.controller('nameCalculatorCtrl', ['$scope', function($scope) {
	$scope.title = '¡¡Hola Chiqui!!';
	$scope.str = '';

	$scope.calculateNumericForString = function(str)
	{
		var sum = 0;

		for (var i = 0; i < str.length; ++i) {
			sum += str.charCodeAt(i);
		}

		return sum;
	}
}]);

})();
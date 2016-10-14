(function() {
	'use strict';

	angular
		.module('MenuApp')
		.component('spinner', {
			templateUrl: 'partials/spinner.component.template.html',
			controller: SpinnerComponentController,
			bindings: { message: '@' }
		});

	SpinnerComponentController.$inject = ['$rootScope'];
	function SpinnerComponentController($rootScope) {
		var ctrl = this;
		var disposables = [];

		ctrl.$onInit = function() {
			ctrl.message     = !ctrl.message ? 'Loading\u2026' : ctrl.message;
			ctrl.showSpinner = false;


			var startDisposable = $rootScope.$on('$stateChangeStart',
				function(event, toState, toParams, fromState, fromParams, options) {
					ctrl.showSpinner = true;
			});

			var successDisposable = $rootScope.$on('$stateChangeSuccess',
				function(event, toState, toParams, fromState, fromParams) {
				ctrl.showSpinner = false;
			});

			var errorDisposable = $rootScope.$on('$stateChangeError',
				function(event, toState, toParams, fromState, fromParams, error) {
					ctrl.showSpinner = false;
			});

			disposables.push(startDisposable, successDisposable, errorDisposable);
		};

		ctrl.$onDestroy = function() {
			ctrl.showSpinner = false;

			// Disposing
			disposables.forEach(function(disposable) {
				disposable();
			});
		};
	}
})();
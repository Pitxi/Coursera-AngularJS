(function() {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.template.html'
        })
        .state('categories', {
            url: '/menu',
            controller: 'CategoriesController as Categories',
            templateUrl: 'partials/categories.template.html',
            resolve: {
                categories: [ 'MenuDataService', function (MenuDataService) { return MenuDataService.getAllCategories(); } ]
            }
        })
        .state('categories.items', {
            controller: 'ItemsController as Items',
            template: '<items items-list="Items.itemsList"></items>',
            resolve: {
                itemsList: [ '$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                    if (!!$stateParams.categoryId) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryId)
                        .then(function(response) {
                            return response.data.menu_items;
                        });
                    }

                    return [];
                } ]
            },
            params: { categoryId: null }
        });

        $urlRouterProvider.otherwise('/');
    }
})();
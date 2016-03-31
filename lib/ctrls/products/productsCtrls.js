mainModule.controller('productsListCtrl', ['$scope', 'productsDataService', '$routeParams', function ($scope, productsDataService, $routeParams) {
    $scope.productsList = productsDataService.all();
    $scope.productsCategory = productsDataService.getProducts($routeParams.id);

    $scope.changeCategory = function (index) {
        $scope.productsCategory = productsDataService.getProducts(index + 1);
    }
}])

;
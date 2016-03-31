mainModule.controller('newsListCtrl', ['$scope', 'newsDataService', '$routeParams', function ($scope, newsDataService, $routeParams) {
    $scope.sideMenu = newsDataService.all();
    $scope.newsCategory = newsDataService.getCategory($routeParams.id);

    $scope.changeCategory = function (index) {
        $scope.newsCategory = newsDataService.getCategory(index + 1);
    };
    $scope.focusItem = function (index) {
        $scope.sideMenu[index].isFocus = true;
    }
    $scope.blurItem = function (index) {
        $scope.sideMenu[index].isFocus = false;
    }
    $scope.meinv = { name: "/sources/images/nav/mm.jpg", qq1: "/sources/images/nav/qq1.png", qq2: "/sources/images/nav/qq2.png" };
}])
.controller('newsDetailCtrl', function ($scope, newsDataService, $routeParams) {
    var newsCategory = newsDataService.getCategory($routeParams.catetogyId);
    $scope.news = newsDataService.getNews(newsCategory, $routeParams.newsId);

    $scope.sideMenu = newsDataService.all();
    $scope.changeCategory = function (index) {
        $scope.newsCategory = newsDataService.getCategory(index + 1);
    }
})

;
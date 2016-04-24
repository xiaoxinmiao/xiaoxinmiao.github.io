mainModule.controller('jobsCtrl', ['$scope', 'jobsDataService', '$routeParams', function ($scope, jobsDataService, $routeParams) {
    $scope.sideMenu = jobsDataService.all();
    $scope.jobsCategory = jobsDataService.getCategory($routeParams.id);

    //$scope.jobs = jobsDataService.getCategory($routeParams.catetogyId);

    $scope.changeCategory = function (index) {
        $scope.jobsCategory = jobsDataService.getCategory(index + 1);
    }
}])
;
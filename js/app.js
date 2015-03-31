var angularWeb = angular.module('angularWeb', ['ui.bootstrap']);

angularWeb.controller('navigationController', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
})

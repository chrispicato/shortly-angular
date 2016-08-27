angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code her
  // if (!Auth.isAuth()) {
  //   $location.url('/signin');
  // }
  $scope.link = {};

  $scope.addLink = function () {
    Links.addOne($scope.link);
  };
});

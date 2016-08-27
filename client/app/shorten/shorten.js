angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code her
  $scope.link = {url: ''};

  $scope.addLink = function () {
    if ($scope.myForm.input.$valid) {
      console.log('valid!!');
      Links.addOne($scope.link);
    } else {

    }
  };
});

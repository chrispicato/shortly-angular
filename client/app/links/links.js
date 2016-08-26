angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };
  Links.getAll().then(function(results) {
    $scope.data.links = results;
  });
});

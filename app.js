var app = angular.module('redditClone', []); // What's missing? Hint, it's more than one thing.

app.controller("NewPostController", function($scope) { // What's missing?
  $scope.posts = {}; // Store todo items here. What is the data type?
  $scope.posts.data = [];
  $scope.posts.newPost = {};
  
  $scope.addPost = function(newPost) {
    $scope.posts.data.push(newPost);
    $scope.posts.newPost = {};
  };
  

  $scope.toggleForm = function(){
    if (!$scope.posts.new) {
      $scope.posts.new = true;
    }
  };

  $scope.toggleOff = function(){
    if ($scope.posts.new) {
      $scope.posts.new = false;
    }
  }
});


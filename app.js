var app = angular.module('redditClone', []); // What's missing? Hint, it's more than one thing.

app.controller("NewPostController", function($scope) { // What's missing?
  $scope.posts = {}; // Store todo items here. What is the data type?
  $scope.posts.data = [];
  $scope.posts.newPost = {};
  $scope.rightNow = new Date();
  $scope.newComment = '';

  $scope.addPost = function(newPost) {
    newPost.votes = 0;
    newPost.comments = [];
    newPost.showComment = false;
    // newPost.index = $scope.posts.data.length;
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
  };

  $scope.upvotes = function(index){
    $scope.posts.data[index].votes++;
  };

  $scope.downvotes = function(index){
    $scope.posts.data[index].votes--;
  };

  $scope.addComment = function(index, newComment){
    $scope.posts.data[index].comments.push(newComment);
  };

  $scope.commentForm = function(index){
    // newPost.showComment = true;
    $scope.posts.data[index].showComment = true;
  };

});


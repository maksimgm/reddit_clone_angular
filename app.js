var app = angular.module('redditClone', []); // What's missing? Hint, it's more than one thing.

app.controller("NewPostController", function($scope) { // What's missing?
  $scope.posts = {}; // Store posts here. What is the data type?
  $scope.posts.data = [];
  $scope.posts.newPost = {};
  $scope.comment = {};


  $scope.addPost = function(newPost) {
    newPost.votes = 0;
    newPost.comments = [];
    newPost.rightNow = new Date();
    newPost.showComment = false;
    newPost.allComments = false;
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

  $scope.upvotes = function(post){
    post.votes++;
  };

  $scope.downvotes = function(post){
    post.votes--;
  };

  $scope.addComment = function(data, comment){
    data.comments.push(comment);
    data.showComment = false;
    data.allComments = false;
    $scope.comment = {};
  };

  $scope.commentForm = function(post){
    // newPost.showComment = true;
    post.showComment = true;
  };

  $scope.showAllComments = function(data){
    data.allComments = !data.allComments;
  };

  $scope.orderVal = '-votes';

});


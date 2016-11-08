(function() {
  'use strict';
  var app = angular.module('app', ['ngRoute']);
}());

(function() {
  'use strict';
  var app = angular.module('app');
  app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl : 'templates/home.html'
    });
    $routeProvider.when('/blogPost', {
      templateUrl : 'templates/blogPosts.html'
    });
    $routeProvider.when('/blogPost/:id', {
      templateUrl : 'templates/blogPost.html'
    });
    $routeProvider.otherwise({
      redirectTo : '/home'
    });
  });
}());

// (function() {
//   'use strict';
//   var app = angular.module('app');
//
//   app.controller('mainCTRL', [
//     '$scope',
//     function ($scope) {
//       // Here is where the base functions will go.
//     }
//   ]);
// }());

(function() {
  'use strict';
  var app = angular.module('app');

  app.controller('mainCTRL', [
    '$scope',
    function ($scope) {
      // Here is where the base functions will go.
    }
  ]);
}());


(function() {
  'use strict';
  var app = angular.module('app');

  app.controller('blogPostsCTRL', [
    '$scope',
    '$http',
    function ($scope, $http) {
      $scope.blogPosts = [];
      $http({
        method: 'GET',
        url: '/api/posts'
      }).then(function successCallback(response) {
        $scope.blogPosts = response.data.posts;
        console.log($scope.blogPosts, response.data.posts, response.data);
      }, function errorCallback(response) {
        alert("ERROR!!")
      });
    }
  ]);
  app.controller('blogPostCTRL', [
    '$scope',
    '$http',
    '$routeParams',
    function ($scope, $http, $routeParams) {
      $scope.blogPosts = [];
      $http({
        method: 'GET',
        url: '/api/posts/' + $routeParams.id
      }).then(function successCallback(response) {
        $scope.blogPost = response.data.post;
        console.log($scope.blogPosts, response.data.post, response.data);
      }, function errorCallback(response) {
        alert("ERROR!!")
      });
    }
  ]);
}());
angular.module('fickle.services', [])

.factory('Auth', function ($http, $location, $window) {
    var signin = function (user) {
      return $http({
          method: 'POST',
          url: '/signin',
          data: user
        })
        .then(function (resp) {
          return resp.data.token;
        });
    };
    var signup = function (user) {
      console.log("in service controller signup")
      return $http({
          method: 'POST',
          url: '/signup',
          data: user
        })
        .then(function (resp) {
          return resp.data;
        });
    };
    return {
      signin: signin,
      signup: signup,
    };
});

.factory('Podcasts', function ($http, $location, $window) {
    var getTags = function () {
      // TO DO TESSA
    },
    var getPodcasts = function () {
      // TO DO AJ
    }

    return {
      getTags: getTags,
      getPodcasts: getPodcasts,
    };
});
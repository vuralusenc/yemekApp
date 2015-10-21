// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  }).
  state('app.anayemek', {
    url: "/anayemek",
    views: {
      'menuContent': {
        templateUrl: "templates/anayemek.html",
        controller:"anayemek"
      }
    }
  }).state('app.yemekbilgi',{
    url: "/anayemek/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/yemek.html",
        controller:"anayemek"
      }
    }
  }).
  state('app.etliyemek', {
    url: "/etliyemek",
    views: {
      'menuContent': {
        templateUrl: "templates/etliyemek.html",
        controller:"etliyemek"
      }
    }
  }).state('app.etliyemekbilgi',{
    url: "/etliyemek/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/etliyemekbilgi.html",
        controller:"etliyemek"
      }
    }
  }).
  state('app.corba', {
    url: "/corba",
    views: {
      'menuContent': {
        templateUrl: "templates/corba.html",
        controller:"corba"
      }
    }
  }).state('app.corbabilgi',{
    url: "/corba/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/corbabilgi.html",
        controller:"corba"
      }
    }
  })
  .state('app.dolma', {
    url: "/dolma",
    views: {
      'menuContent': {
        templateUrl: "templates/dolma.html",
        controller:"dolma"
      }
    }
  }).state('app.dolmabilgi',{
    url: "/dolma/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/dolmabilgi.html",
        controller:"dolma"
      }
    }
  })
   .state('app.pilav', {
    url: "/pilav",
    views: {
      'menuContent': {
        templateUrl: "templates/pilav.html",
        controller:"pilav"
      }
    }
  }).state('app.pilavbilgi',{
    url: "/pilav/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/pilavbilgi.html",
        controller:"pilav"
      }
    }
  })
    .state('app.kurabiye', {
    url: "/kurabiye",
    views: {
      'menuContent': {
        templateUrl: "templates/kurabiye.html",
        controller:"kurabiye"
      }
    }
  }).state('app.kurabiyebilgi',{
    url: "/kurabiye/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/kurabiyebilgi.html",
        controller:"kurabiye"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistsCtrl'
      }
    }

  }).state('app.anaekran', {
    url: "/anaekran",
    views: {
      'menuContent': {
        templateUrl: "templates/anaekran.html",
        controller: 'anaekran'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/anaekran');
});

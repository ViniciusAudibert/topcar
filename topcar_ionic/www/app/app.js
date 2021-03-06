angular.module('topcar', [
  'ionic',
  'app',
  'home',
  'catalog',
  'contact',
  'favorites',
  'login',
  'news',
  'services'
])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/partials/menu/menu.html',
    controller: 'appController'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/pages/home/home.html',
        controller: 'homeController'
      }
    }
  })

  .state('app.catalog', {
    url: '/catalog',
    views: {
      'menuContent': {
        templateUrl: 'templates/pages/catalog/catalog.html',
        controller: 'catalogController'
      }
    }
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/pages/contact/contact.html',
        controller: 'contactController'
      }
    }
  })

  .state('app.favorites', {
    url: '/favorites',
    views: {
      'menuContent': {
        templateUrl: 'templates/pages/favorites/favorites.html',
        controller: 'favoritesController'
      }
    }
  })

  .state('app.news', {
    url: '/news',
    views: {
      'menuContent': {
        templateUrl: 'templates/pages/news/news.html',
        controller: 'newsController'
      }
    }
  })

  .state('app.services', {
    url: '/services',
    views: {
      'menuContent': {
        templateUrl: 'templates/pages/services/services.html',
        controller: 'servicesController'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/home');
})

.directive('ngFab', function () {
  return {
    restrict: 'E',
    scope: {
      index: '=',
      element: '='
    },
    controller: function($scope, $element) {     
      //var carIndex = $scope.index;
      
      let fabButtons = function(isToggle) {
        let buttons = $element[0].children[0].children[1].children;
        let classProp = isToggle ? 'toggle' : 'remove';

        for(let i = 0; i <  buttons.length; i++) {
          let button = buttons[i];
          button.classList[classProp]('fab-open');
        }
      }

      $scope.fabToogleOpen = function() {
        fabButtons(true);
      }

      $scope.fabClose = function() {
        fabButtons();
      }
    },
    templateUrl: 'templates/partials/components/fab/fab.html'
  };
});

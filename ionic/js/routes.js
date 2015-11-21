angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('chooseService', {
                url: '/choose',
                templateUrl: 'templates/chooseService.html',
                controller: 'chooseServiceCtrl'
            })

            .state('signup', {
                url: '/signup',
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            .state('donate', {
                url: '/donate',
                templateUrl: 'templates/donate.html',
                controller: 'donateCtrl'
            })

            .state('foodType', {
                url: '/donateType',
                templateUrl: 'templates/foodType.html',
                controller: 'foodTypeCtrl'
            })

            .state('pickUpTime', {
                url: '/pickUp',
                templateUrl: 'templates/pickUpTime.html',
                controller: 'pickUpTimeCtrl'
            })

            .state('receive', {
                url: '/receive',
                templateUrl: 'templates/receive.html',
                controller: 'receiveCtrl'
            })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/choose');

    });
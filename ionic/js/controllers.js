(function () {

    var userType;
    var user = {email: localStorage['email'], password: ''};

    angular.module('app.controllers', [])

        .controller('chooseServiceCtrl', function ($scope, $location) {

            function gotoUserType() {
                if (user.email) {
                    if (userType == 'receive') {
                        $location.path('/receive');
                    } else {
                        $location.path('/donate');
                    }
                } else {
                    $location.path('/login');
                }
            }

            userType = localStorage['choice'];

            if (userType) {
                gotoUserType();
            }

            $scope.choose = function (type) {
                localStorage['choice'] = userType = type;
                gotoUserType();
            }

        })

        .controller('signupCtrl', function ($scope) {

        })

        .controller('loginCtrl', function ($scope, $location) {

            $scope.error = '';
            $scope.user = user;

            $scope.login = function () {
                
                if ($scope.user.email.length > 2 && $scope.user.password.length > 2) {
                    localStorage['email'] = $scope.user.email;
                    if (userType == 'receive') {
                        $location.path('/receive');
                    } else {
                        $location.path('/donate');
                    }
                } else {
                    $scope.error = 'Invalid Login';
                }
            };
        })

        .controller('donateCtrl', function ($scope, $location) {
            $scope.donate = function() {
                $location.path('/donateType');
            }
        })

        .controller('foodTypeCtrl', function ($scope) {

        })

        .controller('pickUpTimeCtrl', function ($scope) {

        })
})();
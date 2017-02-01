(function(){

    let app = angular.module('app');

    app.controller('BioController',function ($scope,$location) {
        let vm = this;
        $scope.person = {};
        $scope.verifying = false;

        vm.addAddress = function(){
            $scope.person.date = Date.now();
            $scope.$$childHead.userbio.$setPristine();
            $scope.verifying = true;
        };

        $scope.delete = function(){
            $scope.verifying = false;
        };

        $scope.verified = function(){
            $location.url('/login');
        };
    });

})();
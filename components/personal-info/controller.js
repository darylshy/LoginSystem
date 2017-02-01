(function(){

    let app = angular.module('app');

    app.controller('BioController',function ($scope,$location) {
        let vm = this;
        $scope.person = {};
        vm.addAddress = function(){
            $scope.person.date = Date.now();
            $scope.$$childHead.userbio.$setPristine();
            $("#verify_modal").modal('toggle');
        };

        $scope.verified = function(){
            $("div.modal-backdrop.fade.in").hide();
            $location.url("/login");
        };
    });

})();
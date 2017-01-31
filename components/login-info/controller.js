(function(){

    let app = angular.module('app');

    app.controller('loginController', function ($scope) {
        let vm  = this;
        $scope.successful = false;
        vm.showSuccessMsg =  function () {
            $scope.successful = true;
        };
    });

})();
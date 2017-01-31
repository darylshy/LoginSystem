(function(){

    let app = angular.module('app');

    app.config(function ($routeProvider) {
       $routeProvider.when('/login',{
           templateUrl: 'components/login-info/form.html'
       });
    });

})();
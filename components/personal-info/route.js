(function(){
    let app = angular.module('app');

    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: './components/personal-info/form.html'
        });
    });

})();
(function () {

let app = angular.module('app',[]);

class Person{
    constructor(){
        this.firstname = "";
        this.lastname = "";
        this.street = "";
        this.city = "";
        this.state = "";
        this.zip = "";
    }
}

app.controller('BioController',function ($scope) {
    let vm = this;
    vm.addresses = [];
    vm.person = {};
    vm.addAddress = function(){
        vm.person.date = Date.now();
        vm.addresses.push(vm.person);
        vm.person = new Person();
        $scope.userbio.$setPristine();
    }
    vm.delete = function(index){
        console.log(index);
        vm.addresses.splice(index,1);
    }
})

})();

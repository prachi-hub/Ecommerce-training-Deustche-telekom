// 1. Define Angularjs module
var app = angular.module("onlineShopping", []);
app.controller("LoginController", function($scope){
    // define model
    $scope.user = {
        email: '',
        password: ''
    };

    $scope.users = [
        {email: 'prachi@gmail.com', password:'123456'},
        {email: 'prachimankar.2@gmail.com', password:'12356'},
    ];

    $scope.onValidate = function(){
        if($scope.user.email === "prachi.mankar@gmail.com" && $scope.user.password === "123456"){
            console.log("Welcome to online shopping.");
        }else{
            console.log("Invalid userName and password.");
        }
    }
});
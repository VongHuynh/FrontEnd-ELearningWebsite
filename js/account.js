//declare module
var app = angular.module('accountApp', ['ngRoute']);
let host = "https://db-fronend-framwork-default-rtdb.firebaseio.com/";
// Config firebase
const firebaseConfig = {
    apiKey: "AIzaSyDBnI4tdq61KtmzuceSnQVqnqyascOgb_U",
    authDomain: "db-fronend-framwork.firebaseapp.com",
    databaseURL: "https://db-fronend-framwork-default-rtdb.firebaseio.com",
    projectId: "db-fronend-framwork",
    storageBucket: "db-fronend-framwork.appspot.com",
    messagingSenderId: "367730327634",
    appId: "1:367730327634:web:91e4c6f9b46f37b2935f8b",
    measurementId: "G-622W9PYM0Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// khỏi tạo database
var database = firebase.database();

// Config url
app.config(function ($routeProvider) {
    $routeProvider
        .when('/UserProfile', { templateUrl: "UserProfile.html", controller: 'accountCtrl' })
        .when('/Register', { templateUrl: "Register.html", controller: 'registerCtrl' })
        .when('/Update_Pass', { templateUrl: "Update_Pass.html", controller: 'updatePassCtrl' })
        .when('/Update_Account', { templateUrl: "Update_Account.html", controller: 'updateAccCtrl' })
        .when('/Login', { templateUrl: "Login.html", controller: 'LogintCtrl' })
        .when('/forgotPass', { templateUrl: "forgotPass.html", controller: 'forgotPassCtrl' })
        // .otherwise({ templateUrl: "Login.html", controller: 'LogintCtrl' })
})

//controller
app.controller('accountCtrl', function ($scope, $http) {
    var studentModel =JSON.parse(sessionStorage.getItem("student"));
    if(studentModel!=null){
        $scope.userName= studentModel.username;
    }else{
        $scope.userName="Vui lòng đăng nhập"
    }
         //logout
         $scope.logout = function () {
            sessionStorage.clear();
            $scope.keyID = null;
            check = false;
            window.location = "Index.html";
        }
})








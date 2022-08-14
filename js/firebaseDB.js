// var app = angular.module('firebase', []);
// let host = "https://db-fronend-framwork-default-rtdb.firebaseio.com/";

// app.controller('registerCtrl', myfunction3);
// function myfunction3($scope, $http) {
//     $scope.listStudent = {};
//     $scope.loadAllStudent = function () {
//         var url = host + '/students.json';
//         $http.get(url).then(resp => {
//             $scope.listStudent =  resp.data;
//             console.log("success", resp);
//             console.log("listStudent", $scope.listStudent);

//         }).catch(err => {
//             console.log("error", err);
//         });
//     }
//     //test load by key
//     $scope.key=null;
//     $scope.StudentByKey= null;
//     $scope.loadStudentByKey = function (key) {
//         var url = host + '/students/' + key +'.json';
//         $http.get(url).then(resp => {
//             $scope.StudentByKey = resp.data;
//             $scope.key = key;
//             console.log("success", resp);
//         }).catch(err => {
//             console.log("error", err);
//         });
//     }
//      // create
//      $scope.createStudent = function () {
//         var item = angular.copy($scope.StudentByKey1);
//         var url = host + '/students/' + $scope.key +'.json';
//         $http.post(url, item).then(resp => {
//             $scope.key = resp.data.name;
//             $scope.listStudent[$scope.key] = item;
//             console.log("success", resp);
//         }).catch(err => {
//             console.log("error", err);
//         });
//     }

//     // update
//     $scope.updateStudent = function () {
//         var item = angular.copy($scope.StudentByKey);
//         var url = host + '/students/' + $scope.key +'.json';
//         $http.put(url, item).then(resp => {
//             $scope.listStudent[$scope.key] = resp.data;
//             console.log("success", resp);
//         }).catch(err => {
//             console.log("error", err);
//         });
//     }
//     // delete
//     $scope.deleteStudent = function () {
//         var url = host + '/students/' +$scope.key +'.json';
//         $http.delete(url).then(resp => {
//             delete listStudent[$scope.key];
//             console.log("success", resp);
//         }).catch(err => {
//             console.log("error", err);
//         });
//     }
// }

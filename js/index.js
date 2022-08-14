//declare module
var app = angular.module('indexApp',['ngRoute']);
// Config url
app.config(function($routeProvider){
    $routeProvider
    .when('/index',{templateUrl: "SubIndex.html"})
    .otherwise({templateUrl:"SubIndex.html"})
})

// indexControll
app.controller('indexController', myfunction);
function myfunction($scope, $http){
    $scope.listSubject = [];
    $http.get("db/Subjects.js").then(
        function (r) { $scope.listSubject = r.data },
        function (d) { alert('Lỗi: ' + d.statusText); }
    );
  
    $scope.pageSize = 4;
    $scope.start = 0;

    // next
    $scope.next = function () {
        if ($scope.start < $scope.listSubject.length - $scope.pageSize) {
            $scope.start += $scope.pageSize;
        }
    }
    //prev
    $scope.prev = function () {
        if ($scope.start > 0) {
            $scope.start -= $scope.pageSize;
        }
    }
    //first
    $scope.first = function () {
        $scope.start = 0;
    }

    //last
    $scope.last = function () {
        sotrang = Math.ceil($scope.listSubject.length / $scope.pageSize);
        $scope.start = (sotrang - 1) * $scope.pageSize;
        console.log("so trang " + $scope.start)
        console.log("start " + $scope.start)
    }

    var studentModel =JSON.parse(sessionStorage.getItem("student"));
    if(studentModel!=null){
        $scope.userName= studentModel.username;
    }else{
        $scope.userName="Vui lòng đăng nhập"
    }

    
    
}

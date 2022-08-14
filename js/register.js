app.controller('registerCtrl',function($scope, $http){
    $scope.studentDefaults = {};
    $scope.list = [];
    var listUsers = firebase.database().ref("students");
    listUsers.on("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            // console.log(childKey, childData)
        });
        $scope.list = snapshot.val();
        // console.log($scope.list)
    })

    
    // create
    $scope.register = function () {
        var item = {
            "username": $scope.usernamed,
            "password": $scope.password,
            "fullname": $scope.fullname,
            "email": $scope.email,
            "gender": "false",
            "birthday": $scope.birthday,
            "schoolfee": "2000000",
            "marks": "0"
        }
        console.log($scope.student)
        var url = host + '/students/.json';
        $http.post(url, item).then(resp => {
            $scope.key = resp.data.name;
            alert("Đăng kí thành công");
        }).catch(err => {
            console.log("error", err);
        });
    }
})
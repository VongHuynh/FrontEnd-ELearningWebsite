app.controller('LogintCtrl',function($scope){
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
        // login
        $scope.keyID;
        var check;
        $scope.login = function () {
            var user = $scope.username;
            var pass = $scope.password;
            var student;
            check = false;
            for (var i = 0; i < Object.keys($scope.list).length; i++) {
                var key = Object.keys($scope.list)[i];
                student = $scope.list[key];
                $scope.studentDefaults = ($scope.list[key]);
                if ($scope.list[key].username == user && $scope.list[key].password == pass) {
                    $scope.keyID = key;
                    console.log($scope.studentDefaults);
                    check = true;
                    break;
                }
                
            }
            if (check) {
                sessionStorage.setItem('keyID',  $scope.keyID);
                sessionStorage.setItem('student', JSON.stringify(student));
                window.location = "index.html";
            } else alert("Username hoặc mật khẩu không chính xác");
        }

});

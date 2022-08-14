app.controller('forgotPassCtrl',function($scope){
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
    
    $scope.getpassword = function () {
        var email = $scope.emailF;
        check = false;
        for (var i = 0; i < Object.keys($scope.list).length; i++) {
            var key = Object.keys($scope.list)[i];
            // $scope.studentDefaults = ($scope.list[key]);
            if ($scope.list[key].email == email) {
                alert("Mật khẩu của bạn là: "+"'"+$scope.list[key].password+"'")
                check=true;
                break;
            }
        }
        if (check==false) {
            alert("Email không tồn tại");
        } 
    }
})
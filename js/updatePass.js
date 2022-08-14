app.controller('updatePassCtrl',function($scope){
    var studentModel =JSON.parse(sessionStorage.getItem("student"));
    if(studentModel!=null){
        $scope.username = studentModel.username;
    }
    
    
    //
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
    
    $scope.updatePass = function () {
        if (sessionStorage.getItem("student") == null) {
            alert("Vui lòng đăng nhập");
            return
        }
        $scope.pass;
        for (var i = 0; i < Object.keys($scope.list).length; i++) {
            var key = Object.keys($scope.list)[i];
            if ($scope.list[sessionStorage.getItem('keyID')].password == $scope.password) {
                console.log($scope.list[sessionStorage.getItem('keyID')].password);
                console.log($scope.password)
                $scope.pass = $scope.list[sessionStorage.getItem('keyID')].password;
                // A post entry.
                var postData = {
                    username: studentModel.username,
                    password: $scope.newPassword,
                    fullname: studentModel.fullname,
                    email: $scope.list[sessionStorage.getItem('keyID')].email,
                    gender: "false",
                    birthday: $scope.list[sessionStorage.getItem('keyID')].birthday,
                    schoolfee: "2000000",
                    marks: "0"
                };
                // Get a key for a new Post.
                // var newPostKey = firebase.database().ref().child('students').push().key;
                // Write the new post's data simultaneously in the posts list and the user's post list.
                var updates = {};
                updates['/students/' + sessionStorage.getItem('keyID')] = postData;
                // updates['/students/' + $scope.AccountUpdate.username + '/' + newPostKey] = postData;
                alert("Cập nhật thành công");
                return firebase.database().ref().update(updates);
            } else {
                alert("Mật khẩu không chính xác");
                return;
            }
        }
    }
})
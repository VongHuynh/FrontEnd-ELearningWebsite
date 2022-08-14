// config url
app.config(function ($routeProvider) {
    $routeProvider
        .when('/Exam/:id/:sbName', { templateUrl: 'StartExam.html', controller: 'examCtrl' })
        .when('/StartExam/:id/:sbName', { templateUrl: 'Exam.html', controller: 'examCtrl' })
})

//exemCtrl controller
app.controller('examCtrl', myfunction2);
function myfunction2($scope, $http, $routeParams) {
    $scope.questions = [];
    $scope.id = $routeParams.id;
    $scope.sbName = $routeParams.sbName;
    $http.get("db/Quizs/" + $scope.id + ".js").then(
        function (d) { $scope.questions = d.data },
        function (e) { alert("Lỗi " + e.statusText); },

    )

    $scope.pageSize = 1;
    $scope.start = 0;
    // next
    $scope.next = function () {
        if ($scope.start < $scope.questions.length - $scope.pageSize) {
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
        sotrang = Math.ceil($scope.questions.length / $scope.pageSize);
        $scope.start = (sotrang - 1) * $scope.pageSize;

    }

    var minute = 60;
    var second = 60;
    var timeOut = null;
    var startTime = function () {
        function oclock() {
            if (minute == -1) {
                clearInterval(timeOut);
            }
            if (second == -1) {
                second = 59;
                minute = minute - 1;
            }
            document.querySelector('.timeQuiz').innerText = minute + ':' + second;

        }

        timeOut = setInterval(function () {
            second--;
            oclock();

        }, 1000);
    }

    $scope.startTimeQuiz = function () {
        startTime();
    }

    //submit button
    $scope.mark = 0;
    // $scope.Mark = function (answer, result) {
    //     if (answer == result) {
    //         $scope.mark = $scope.mark + 1;

    //     } else if (answer != result && $scope.mark > 0) {
    //         $scope.mark--;
    //     }


    //     console.log($scope.mark);
    // }
    let markArr=[];
    $scope.Mark = function (answer, result, index) {
       
        if(answer==result){
            markArr[$scope.start] = 1;
        }else{
            markArr[index] = 0;
        }
        console.log(markArr[0])
    }

    $scope.Submit = function () {
        for(let i =0; i<markArr.length; i++){
            if(markArr[i]==1){
                $scope.mark+=1;
            }
        }
        alert('Điểm của bạn là: ' + $scope.mark);
        clearTimeout(timeOut);
        window.location.replace("index.html");
    }

}

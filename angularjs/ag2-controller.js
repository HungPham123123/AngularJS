app.controller('myController',function($scope){
    $scope.list =['A','E','I','O','U'];
    $scope.choice = 'Your choice is: fpt-aptech';

    $scope.ch = function(choice){
        $scope.choice = "Your Choice is: " +choice;
    };

    $scope.c = function(){
        $scope.choice = "Your choice is: " + $scope.mychoice;
    };

});
var unixApp = angular.module("unixApp", []);

unixApp.controller("quizController", function($scope){
    
    $scope.questions = [{
                            label : "1. What are two commands that affect directories?",
                            answers : ["rmdir and mkdir", "elm and mkdir", "ls and talk", "cd and finger"],
                            name: "one"
                        },
                        {
                            label : "2. What contents does the ls command list as an output on the terminal?",
                            answers : ["Content within the working directory", "All files", "Certain files specified by the user", "Nothing"],
                            name: "two"
                        },
                        {
                            label : "3. What command can be used interchangably when working with files and directories?",
                            answers : ["cp", "pwd", "chmod", "None of these"],
                            name: "three"
                        },
                        {
                            label : "4. What command can you use to navigate around?",
                            answers : ["cp", "cd", "talk", "pwd"],
                            name: "four"
                        },
                        {
                            label : "5. The cp command allows you to ______ files",
                            answers : ["move", "copy", "create", "delete"],
                            name: "five"
                        },
                        {
                            label : "6. Altering modes, or permissions, of directories and files are important. Which command allows you to do this?",
                            answers : ["gzip", "chmod", "none", "lpr"],
                            name: "six"
                        },
                        {
                            label : "7. What are the access levels of files and permissions?",
                            answers : ["read", "execute", "scan", "write", "first, second, and fourth choices"],
                            name: "seven"
                        }];
    
    $scope.correctAnswers = ["rmdir and mkdir", "Content within the working directory", "pwd", "cd", "copy", "chmod", "first, second, and fourth choices"];
    $scope.numCorrect = 0;
    
    $scope.submitQuiz = function(){

        for(var i = 0; i < $scope.questions.length; i++){
            
            for(var j; j < choices.length; i++){
                if(choices[j].checked === true){
                    if(choices[j].innerHTML == correctAnswers[i]){
                        $scope.numCorrect++;
                    }
                }
            }
        }
        alert("submitted quiz " + $scope.numCorrect);
        console.log(choices.value);
        return true;
    };
    
});
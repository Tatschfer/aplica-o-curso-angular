angular.module('aplicacao').controller('PrimeiroController', function($scope){
    $scope.nome='Fernanda Tatsch';

    $scope.iniciado=false;

    $scope.alunos=['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4'];

    $scope.finalizar=function(){
        $scope.iniciado=false;
    };
    $scope.iniciar=function(){
        $scope.iniciado=true;
    }

}); 
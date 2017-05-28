//public/js/controllers/ContatoController.js
(function(){
angular.module('contatooh')
    .controller('ContatoController',
        function($scope,$http, $routeParams, Contato,$q){
            console.log($routeParams.contatoId);

            $scope.mensagem ={
                    texto: ''
                };

            if($routeParams.contatoId){
                Contato.get({
                    id: $routeParams.contatoId
                },
                function(contato){
                    $scope.contato = contato;
                },
                function(erro){
                    $scope.mensagem ={
                        texto: 'Contato não encontrado!'
                    };
                console.log(erro);
                });
            }else{
                $scope.contato = {};
            }

            $scope.salva = function(){
                $http({
                    method: 'POST',
                    url: '/contatos/salvaContato',
                    data: {
                        contato: $scope.contato
                    },
                    headers: {'Content-Type': 'application/json'}
                }).then(function(data){
                    $scope.mensagem = {texto: 'Salvo com sucesso!'};

                    $scope.contato = new Contato();

                    // $scope.btnBackFocus = true;
                    $scope.$broadcast('contatoSalvo');
                },function(statusText){
                    console.log("Não foi possível obter a lista de contatos");
                    console.log(statusText);
                    $scope.mensagem = {texto: statusText.status + ': Não foi possível salvar o contato.'};
                });
            };

            $scope.getListaContatos = function(){
                $http({
                    method: 'GET',
                    url: '/contatos',
                    headers: {'Content-Type': 'application/json'}
                }).then(function(contatos){
                    $scope.contatos = contatos.data;
                },function(statusText){
                    console.log("Não foi possível obter a lista de contatos");
                    console.log(statusText);
                });
            };

            $scope.getListaContatos();
        }
    )
})();
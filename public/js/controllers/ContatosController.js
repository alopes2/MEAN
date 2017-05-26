//public/js/controllers/ContatosController.js

(function(){
    angular.module('contatooh')
    .controller('ContatosController', function($scope, Contato){
        $scope.contatos = [];
        $scope.mensagem = {
            texto: ''
        };

        $scope.incrementa = function(){
            $scope.total++;
        };

        function buscaContatos(){
            Contato.query(
                function(contatos){
                    $scope.contatos = contatos;
                },
                function(erro){
                    console.log('Nâo foi possível obter a lista de contatos');
                    console.log(erro);
                }
            )
        }

        $scope.remove = function(contato){
            Contato.delete({
                id: contato._id
            },
            buscaContatos,
            function(erro){
                $scope.mensagem = {
                    texto: "Não foi possível deletar o contato."
                };
                console.log(erro);
            });
            // var promise = Contato.delete({
            //     id: contato._id
            // }).$promise;

            // promise
            // .then(buscaContatos)
            // .catch(function(erro){
            //     console.log("Não foi possível remover o contato.");
            //     console.log(erro);
            // });
        };

        buscaContatos();

        // $http({
        //     method: 'GET',
        //     url: '/contatos',
        //     type: 'jsonp',
        //     headers: {'Content-Type': 'application/json'}
        // }).then(function(data){
        //         $scope.contatos = data.data;
        //     },function(statusText){
        //         console.log("Não foi possível obter a lista de contatos");
        //         console.log(statusText);
        //     });

    })
})();
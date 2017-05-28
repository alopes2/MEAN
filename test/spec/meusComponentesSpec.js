describe('meuBotaoAviso', function(){
    var $scope;
    var element;

    beforeEach(function(){
        module('meusComponentes');

        inject(function($rootScope, $compile){
            $scope = $rootScope.$new();
            element = angular.element(
                '<meu-botao-aviso nome="Remover" acao="remove()">'
            );

            $compile(element)($scope);
            $scope.$digest();
        });
    });

    it('Deve criar um botão de aviso com texto e função', 
        function(){
            console.log(element);
            expect(element.text()).toContain('Remover');
            expect(element.attr('acao')).toBe('remove()');
        }
    );
});

describe('meuFocus', function(){
    var $scope;
    var element;
    var evento = 'contatoSalvo';

    beforeEach(function(){
        module('meusComponentes');

        inject(function($rootScope, $compile){
            $scope = $rootScope.$new();
            element = angular.element(
                '<button meu-focus evento="'+evento+
                '">Voltar</button>'
            );

            $compile(element)($scope);
            $scope.$digest();
        });
    });

    it('Deve criar um botão de retorno', 
        function(){
            console.log(element);
            expect(element.text()).toContain('Voltar');
            expect(element.attr('evento')).toBe(evento);
        }
    );

    it('Deve focar o botão', 
        function(){
            angular.element(document.body).append(element);
            $scope.$broadcast('contatoSalvo');
            expect(angular.element(document.activeElement).text()).toBe('Voltar');
        }
    );
});

describe('meuPainel', function(){
    var $scope;
    var element;
    var evento = 'contatoSalvo';

    beforeEach(function(){
        module('meusComponentes');

        module('templates');
        inject(function($rootScope, $compile){
            $scope = $rootScope.$new();
            element = angular.element(
                '<meu-painel titulo="Principal"'+
                '"><p>Oi</p></meu-painel>'
            );

            $compile(element)($scope);
            $scope.$digest();
        });
    });

    it('Deve criar um botão de retorno', 
        function(){
            console.log(element.find('h3'));
            expect(element.find('h3').text()).toBe('Principal');
            console.log(element.find('p'));
            expect(element.find('p').text()).toBe('Oi');
        }
    );
});
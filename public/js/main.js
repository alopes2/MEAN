//public/js/main.js

angular.module('contatooh', ['ngRoute', 'ngResource', 'meusComponentes'])
    .config(function($routeProvider, $httpProvider/*, $locationProvider*/){
        //without this, all links should be #! and not only #
        // $locationProvider.hashPrefix('');
        $httpProvider.interceptors.push('meuInterceptor');

        $routeProvider.when('/contatos',{
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController as ctrl'
        })
        .when('/contato/:contatoId', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController as ctrl'
        })
        .when('/contato',{
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController as ctrl'
        })
        .when('/auth',{
            templateUrl: 'partials/auth.html'
        })
        .otherwise({redirectTo: '/contatos'});
    });
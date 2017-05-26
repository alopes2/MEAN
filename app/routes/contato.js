//app/routes/contato.js

function verificaAutenticacao(req, res, next){
    if(req.isAuthenticated())
        return next();
    else
        res.status('401').json('Não autorizado!');
}

module.exports = function(app){
    var controller = app.controllers.contato;

    app.route('/contatos')
        .get(verificaAutenticacao,controller.listaContatos);

    app.route('/contatos/:id')
        .get(verificaAutenticacao,controller.obtemContato)
        .delete(verificaAutenticacao,controller.removeContato);

    app.route('/contatos/salvaContato')
        .post(verificaAutenticacao,controller.salvaContato);

    // app.get('/contatos', controller.listaContatos);
    // app.get('/contatos/:id', controller.obtemContato);
    // app.delete('contatos/:id', controller.removeContato);
};
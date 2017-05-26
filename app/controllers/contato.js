//app/controllers/contato


module.exports = function(app){

    var Contato = app.models.contato;
    var sanitize = require('mongo-sanitize');

    var controller = {};
    controller.listaContatos = function(req, res){
        Contato.find().populate('emergencia').exec()
        .then(
            function(contatos){
                res.json(contatos);
            },
            function(error){
                console.error(error);
                res.status(500).json(error);
            }
        );
    };

    controller.obtemContato = function(req,res){
        var _id = req.params.id;
        Contato.findById(_id).exec()
        .then(
            function(contato){
                if(!contato) throw new Error('Contato não encontrado');
                res.json(contato);
            },
            function(error){
                console.log(error);
                res.status(404).json(error);
            }
        );
    };

    controller.salvaContato = function(req,res){
        var _id = req.body.contato._id;
        
        var dados = {
            nome: req.body.contato.nome,
            email: req.body.contato.email,
            emergencia: req.body.contato.emergencia || null
        };
        if(_id){
            Contato.findByIdAndUpdate(_id, dados).exec()
            .then(
                function(contato){
                    res.json(contato);
                },
                function(error){
                    console.error(error);
                    res.status(500).json(error);
                }
            );
        }else{
            Contato.create(req.body.contato)
            .then(
                function(contato){
                    res.status(201).json(contato);
                },
                function(error){
                    console.log(error);
                    res.status(500).json(error);
                }
            );
        }
    };

    controller.removeContato = function(req, res){
        var _id = sanitize(req.params.id);
        Contato.remove({_id: _id}).exec()
        .then(
            function(){
                res.status(204).end();
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };
    return controller;
};
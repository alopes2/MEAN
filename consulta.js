//contatooh/consulta.js

var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

var _idProcurado = new ObjectID("5904eb884c63ac24519e06a3");

MongoClient.connect('mongodb://localhost/contatooh',
    function(error,db){
        if(error) throw err;
        db.collection('contatos').findOne({_id: _idProcurado},
            function(error, contato){
                if(error) throw err;
                console.log(contato);
            }
        );
    }
);

//contatooh/test/data.js

var MongoClient = require('mongodb').MongoClient;

var contatos = [
    {nome: 'xyz1', email:'xyz1@email.com'},
    {nome: 'xyz2', email:'xyz2@email.com'},
    {nome: 'xyz3', email:'xyz3@email.com'}
];

MongoClient.connect('mongodb://localhost/contatooh_test',
    function(erro,db){
        if(erro) throw erro;

        db.dropDatabase(function(err){
            if(err) return console.log(err);
            console.log('Banco apagado com sucesso');
            db.collection('contatos').insert(contatos,
                function(err, inserted){
                    if(err) return console.log(err);
                    console.log('Banco populado com sucesso');
                    process.exit(0);
                }
            );
        });
    }
);
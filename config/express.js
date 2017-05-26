//config/express.js
var express = require('express');

module.exports = function(){
    var app = express();
    var load = require('express-load');
    var bodyParser = require('body-parser');

    var cookieParser = require('cookie-parser');
    var session = require('express-session');
    var passport = require('passport');
    var helmet = require('helmet');
    //var home = require('../app/routes/home');

    //variáveis de ambiente
    app.set('port', 3000);
    
    //middleware
    app.use(express.static('./public'));
    
    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.use(cookieParser());
    app.use(session({
            secret: 'homem avestruz',
            resave: true,
            saveUninitialized: true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());
    //app.disable('x-powered-by');
    app.use(helmet.hidePoweredBy({setTo: 'PHP 5.5.14'}));
    app.use(helmet.frameguard());
    app.use(helmet.xssFilter());
    app.use(helmet.noSniff());
    app.use(helmet());

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes/auth.js')
        .then('routes')
        .into(app);
    //home(app);

    app.get('*', function(req,res){
        res.status(404).render('404');
    });

    return app;
};
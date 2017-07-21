//contatooh/config/env/production.js
console.log(process.env);
module.exports = {
    env: 'production',
    db: 'mongodb://' + 
        process.env.MONGODB_USER + ':' +
        process.env.MONGODB_PASSWORD + '@' +
        process.env.MONGODB_SERVICE_HOST + ':' +
        process.env.MONGODB_SERVICE_PORT + '/' +
        'contatooh',
        //process.env.OPENSHIFT_APP_NAME;
        //,OPENSHIFT_MONGODB_DB_URL + 'contatooh',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    port: process.env.CONTATOOH_SERVICE_PORT || 3000,//OPENSHIFT_NODEJS_PORT
    address: process.env.CONTATOOH_SERVICE_HOST || '127.0.0.1',//OPENSHIFT_NODEJS_IP
    domain: process.env.OPENSHIFT_APP_DNS
    };

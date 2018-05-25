const ENV = process.env.NODE_ENV;

 const Config = {
     DEV:{
        debug: true,

        host: '0.0.0.0',
        port: 9900,

        bodyParser:{
           extended: false,
           limit: '20mb'
        },

        database:{
         host:'localhost',
         username:'primayudantra',
         password:'',
         dbName:'postgre_test'
       },
     },
    STAGING:{
        debug: true,

        host: '0.0.0.0',
        port: 9900,

        bodyParser:{
           extended: false,
           limit: '20mb'
        },

        database:{
            psql: {
                client: 'pg',
                connection: {
                    host : '127.0.0.1',
                    user : 'primayudantra',
                    password : '',
                    database : 'postgre_test'
                }
            }
       }
     },
 }

module.exports = Config[ENV];

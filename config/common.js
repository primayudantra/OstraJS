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

       redis:{
          prefix: 'q',
          redis: {
            port: 6379,
            host: '127.0.0.1',
            auth: '',
          }
        }
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
            host:'localhost',
            username:'primayudantra',
            password:'',
            dbName:'postgre_test'
        },

        redis:{
            prefix: 'q',
            redis: {
                port: 6379,
                host: '127.0.0.1',
                auth: '',
            }
        }
    },
}

module.exports = Config[ENV];

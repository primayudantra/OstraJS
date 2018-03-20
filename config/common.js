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
     },
     STAGING:{
       debug: true,

       host: '0.0.0.0',
       port: 9901,

       bodyParser:{
           extended: false,
           limit: '20mb'
       },
     }
 }

module.exports = Config[ENV];

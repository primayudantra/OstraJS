import Winston from 'winston';
import expressLogger from 'express-request-logger';

let log = new(Winston.Logger)({
  transports: [
    new (Winston.transports.Console)({ colorize: true }),
    new (Winston.transports.File)({ filename: `${__dirname}/../log/apps.log`, handleExceptions: true, colorize: true })
  ],
  exceptionHandlers:[
    new (Winston.transports.Console)({ colorize: true }),
    new (Winston.transports.File)({ filename: `${__dirname}/../log/exceptions.log`, handleExceptions: true, colorize: true })
  ]
})

class Logger{
  init(app){
    var application = app;
    application.use((req,res,next)=> {req.log = log; next()})
    application.use(expressLogger.create(log));
  }
}

module.exports = new Logger()

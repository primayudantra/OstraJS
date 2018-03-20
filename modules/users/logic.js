import repository from './repository';

class Logic{
  logicDataUsers(req,res,next){
    req.userId = "prima yudantra";
    next();
  }
}

module.exports = new Logic();

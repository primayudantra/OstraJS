import Logic from './Logic';

class Users{

  init(routes){
    routes.get("/", this.getDataUsers)
    routes.get("/users", this.getDataUsers)
  }

  getDataUsers(req,res,next){
    Logic.logicDataUsers(req,res,next);
  }
}

module.exports = new Users()

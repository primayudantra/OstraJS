import Users from "../modules/users/"
// Put your modules here

class InitializeModules{
  init(app){
    Users.init(app);
  }
}

module.exports = new InitializeModules()

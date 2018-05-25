import Users from "../modules/users/"
import Profiles from "../modules/profiles/"
// Put your modules here

class InitializeModules{
  init(app){
    Users.init(app);
    Profiles.init(app);
  }
}

module.exports = new InitializeModules()

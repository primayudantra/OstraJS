import Channel from "../modules/channel/"
// Put your modules here

class InitializeModules{
  init(app){
    Channel.init(app);
  }
}

module.exports = new InitializeModules()

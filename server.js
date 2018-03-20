import Express from './utils/Express'

class Server{
  constructor(){
    Express._serverRunning();
  }
}

module.exports = new Server();

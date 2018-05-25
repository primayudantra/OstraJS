import Database from '../../utils/database';

var DB = Database;
var initRoutes = '/profile';


class Profiles{
  init(routes){
    routes.get(initRoutes + "/", this.getDataProfile)
    routes.get(initRoutes + "/example", this.getDataProfile)
  }

  getDataProfile(req,res){
    console.log(DB)
  }

}

module.exports = new Profiles();

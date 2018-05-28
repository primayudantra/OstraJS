import repository from './repository';

class Logic{
  logic_get_data(req,res,next){
    repository.repo_get_data(req,res)
  }
}

module.exports = new Logic();

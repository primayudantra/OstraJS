import Logic from './Logic';

class Channel{

  init(routes){
  	routes.get("/channel_name", this.view_data)

    routes.get("/get_channel_name", this.get_data)
  }

  get_data(req,res,next){
    Logic.logic_get_data(req,res,next);
  }

  view_data(req,res){
  	res.render('index')
  }
}

module.exports = new Channel()

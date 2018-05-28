import Database from '../../utils/database';
var DB = Database.db;

class Repository{
  async repo_get_data(req,res){
  	const query = `select * from channel_test order by id desc limit 1`
  	const result = await DB.query(query);

  	const data = result[0][0];

  	res.send(data);
  }
}

module.exports = new Repository();

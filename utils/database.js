import Sequelize from 'sequelize';
import Common from '../config/common';

class Database{
  constructor() {
    this.db = {}

    this.__init();
  }

  __init(){
    this.db = new Sequelize(Common.database.dbName,Common.database.username,Common.database.password,{ host:Common.database.host,dialect: 'postgres'})
  }

  getDBConnection () {
    return this.sequelize;
  }
}

module.exports = new Database()

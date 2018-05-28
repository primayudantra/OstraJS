// Node Library
import express from 'express';
import bodyParser from 'body-parser';

// Initial Common Environment
import Common from '../config/common'

// Initial Modules
import InitializeModules from './initialize';
import Logger from './logger';
import Database from './database';
import MQTT from '../services/mqtt'

class Express{
  constructor(){
    this.app = {}
    this._init();
  }
  _init(){
    this.app = express();
    this.app.set('views', './views')
    this.app.set('view engine', 'ejs')
    this._bodyParser()
  }

  _bodyParser(){
    this.app.use(bodyParser());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded(Common.bodyParser));
  }


  async _serverRunning(){
    Logger.init(this.app)
    InitializeModules.init(this.app)

    Database.__init();

    MQTT.subscribe();

    this.app.listen(Common.port)

    console.log(`
    --------------------
    SETUP SERVER FOR AN API
    SERVER RUNNING AT : ${Common.host}:${Common.port}
    Author : @primayudantra / prima.yudantra@gmail.com
    --------------------
    `)
  }
}

module.exports = new Express();

# OSTRA

> OSTRA is nodejs boilerplate using node, express, etc

### Why OSTRA

> The idea of OSTRA is to create Express API Service simple and Scallable, you just create modules at modules folder.

### HOW TO RUN?
```
$ git clone https://github.com/primayudantra/OstraJS/edit/mqtt/README.md
$ cd OstraJS
$ npm install
$ npm run development 
```
**Dont Forget Start Your redis-server And psql server**

#### Folder Structure
```
/ config (for config Environment)
/ log (for logging application)
/ modules
  - modulesName
    - index.js (Routes Init, and main function)
    - logic.js (Business Logic)
    - repository.js (Logic to create to database)
/ services
  - mqtt.js (For Mqtt Subscriber)
/ utils
  - express.js (Express Configuration)
  - initialize.js (Initialize Your Routes here!)
  - logger.js (Logging your application)

index.js
server.js (Server Setup)
```

#### Routes Init at Modules Folder and And Main Function
```js
import Logic from './Logic';

class Users{

  init(routes){
    routes.get("/", this.getDataUsers) // Routes Init and Put your function
    routes.get("/users", this.getDataUsers) 
  }


  // Example Express Function
  getDataUsers(req,res,next){
    Logic.logicDataUsers(req,res,next);
  }
}

module.exports = new Users()
```

#### Register your modules here at utils/initialize.js
```js
import Users from "../modules/users/"
import ExampleModule from "../modules/ExampleModule/"
// Put your modules here

class InitializeModules{
  init(app){
    Users.init(app);
    ExampleModule.init(app); <-- Example Module
  }
}

module.exports = new InitializeModules()
```

#### MQTT Subscriber function

```js
import Database from '../utils/database';
import mqtt from 'mqtt';
import kue from 'kue';

var DB = Database.db;

var queue = kue.createQueue();

class MQTT{
  constructor(){
    this.client = mqtt.connect('mqtt://{broker-url}');
    this.message = '';
  }

  subscribe(){
    this.client.on('connect', () => {
      this.client.subscribe('{mqtt-channel})
    })

    this.handler();
  }

  async handler(){
    this.client.on('message', async (topic, message) => {
      var messages = message.toString();
      console.log(messages);
      try{
        await queue.create('{redis-channel}', {payload}).save();  
      }catch(e){
        console.log(e)
      }
      await this.store_to_db();
    })
    
  }

  async store_to_db(){
    var obj = {};
    queue.process('{redis-channel}', 1, async (job, done)=>{
      
      obj = job.data;
      
      // Example insert query
      const query = `INSERT INTO channel_test(channel_name, channel_content, created_at) values('${obj.channel_name}', '${obj.channel_content}', CURRENT_TIMESTAMP)`; 
      
      // store to db
      await DB.query(query); 
    })
  } 
}

module.exports = new MQTT();
```

### TO DO
1. Unit Test


### Contact
If you have any questions, feedback, idea or anything, please drop me a message at `prima.yudantra@gmail.com`

### License

  [ISC](LICENSE) Copyright © 2018 Prima Yudantra


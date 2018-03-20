# OSTRA

> OSTRA is nodejs boilerplate using node, express, etc

### Why OSTRA

> The idea of OSTRA is to create Express API Service simple and Scallable, you just create modules at modules folder.



#### Folder Structure
```
/ config (for config Environment)
/ log (for logging application)
/ modules
  - modulesName
    - index.js (Routes Init, and main function)
    - logic.js (Business Logic)
    - repository.js (Logic to create to database)
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

### TO DO
1. Unit Test
2. Utils to Database Connections (PSQL, MySQL and MongoDB)
3. Setup Redis for Memory Cache.


### Contact
If you have any questions, feedback, idea or anything, please drop me a message at `prima.yudantra@gmail.com`

### License

  [ISC](LICENSE) Copyright © 2018 Prima Yudantra

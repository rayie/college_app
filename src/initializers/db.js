import { Initializer, api, log } from "actionhero";
const { MongoClient } = require('mongodb');
const Promise = require('bluebird')
const uri = process.env.DB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connect = () => {
  return new Promise(  (res, rej) => client.connect(err => {
    if (err){
      console.error(err)
      return rej(err)
    }

    let db = client.db("college_db");
    console.log(db)
    // perform actions on the collection object
    return res(db);
  }));
}



export class myInitializer extends Initializer {
  constructor() {
    super();
    this.name = "dbConn";
    this.loadPriority = 1000;
    this.startPriority = 1000;
    this.stopPriority = 1000;
  }

  async initialize() {
    log("top of initialized", "debug", this.name);
    try {
      api.db = await connect();
    }
    catch (err){
      console.error(err)
      process.exit()
    }

    log("I initialized", "debug", this.name);
  }

  async start() {
    //await api.StuffInit.startStuff();
    log("I started", "debug", this.name);
  }

  async stop() {
    //await api.StuffInit.stopStuff();
    log("I stopped", "debug", this.name);
  }
}

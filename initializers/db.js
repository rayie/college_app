'use strict'
const { Initializer, api } = require('actionhero')
const { MongoClient } = require('mongodb');
const Promise = require('bluebird')

try {
  require('dotenv').config();
}
catch(dotEnErr){
  console.error(dotEnErr);
  process.exit();
}

const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connect = () => {
  return new Promise(  (res, rej) => client.connect(err => {
    if (err){
      console.error(err)
      return rej(err)
    }

    let db = client.db("college_db");
    console.log('Connected to mongodb')
    // perform actions on the collection object
    return res(db);
  }));
}

module.exports = class Db extends Initializer {
  constructor() {
    super();
    this.name = "dbConn";
    this.loadPriority = 1000;
    this.startPriority = 1000;
    this.stopPriority = 1000;
  }

  async initialize() {
    console.log("top of initialized", "debug", this.name);
    try {
      api.db = await connect();
    }
    catch (err){
      console.error(err)
      process.exit()
    }

    console.log("I initialized", "debug", this.name);
  }

  async start() {
    //await api.StuffInit.startStuff();
    console.log("I started", "debug", this.name);
  }

  async stop() {
    //await api.StuffInit.stopStuff();
    console.log("I stopped", "debug", this.name);
  }
}

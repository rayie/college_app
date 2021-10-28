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

const main = async () =>  {
  let db;
  try {
    db = await connect();
  }
  catch (err){
    console.error(err)
    process.exit()
  }


  let s = {
    nm: "Harvard",
    city: "Cambridge"
  }

  let ir;
  try {
    ir = await db.collection("schools").insertOne(s)
    console.log(ir)
  }
  catch (err){
    console.error(err)
    process.exit()
  }


  client.close();
}


main()


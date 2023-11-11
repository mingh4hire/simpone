 import express from 'express'
// import mongoclient from 'mongoclient'
 import {MongoClient} from 'mongodb'
const uri = "mongodb://0.0.0.0:27017/";
  
 const m =   new MongoClient(uri)
 const database = m.db("test");
 const movies = database.collection("name");
 
  const app = express()



  app.get('/', (r,q)=>{q.send('asdfasd')})

  app.get('/a', async(r,q)=>{
    let arr = [];
    let mvs = movies.find({}).limit(11);
    for await (const iia of mvs){
        arr.push(iia);
    }
    q.send(arr);
  })
app.listen(8080)
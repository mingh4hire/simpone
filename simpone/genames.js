 import express from 'express'
// import mongoclient from 'mongoclient'
 import {MongoClient} from 'mongodb'
const uri = "mongodb://0.0.0.0:27017/";
 
 const m =   new MongoClient(uri)
 const database = m.db("test");
 const movies = database.collection("name");
 for (let i =0; i < 1000; i++){
    const mm = await movies.insertOne({n:getName()})

 }
 const g = movies.aggregate([{$group:{_id:[{$substr:['$n',0,2]}], cnt: {$count:{}}}}, {$sort:{_id:1}}])
for await (const ii of g){
    console.log(ii);
}
 const app = express()



app.get('/', (r,q)=>{q.send('asdfasd')})
app.listen(8081)
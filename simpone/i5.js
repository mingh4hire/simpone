import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri);
async function run() {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db("test");
    const movies = database.collection("abc");
    const res = await movies.deleteOne({a:3});

    const res4 = await movies.deleteOne({a:101});
    
    console.log(res4);

    const res2 = await movies.find({a: {$eq: 3}})
    for await(const i of res2){
        console.log(i);
    }
    const agg = await movies.aggregate([
        {$match: {a: {$lt: 5}}},
        {$group: {_id: ['$a'], count:{$count:{}}}}]);
        
    for await(const i of agg){
        console.log(i);
    }
    // Print the document returned by findOne()
   } finally {
    await client.close();
  }
}
run()//.catch(console.dir);


import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri);
async function run() {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db("test");
    const movies = database.collection("a");
    // Query for a movie that has the title 'The Room'
    const query = { b: 1};
    const options = {
      // Sort matched documents in descending order by rating
      sort: { "b": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, name: 1, b: 1 },
    };
    // Execute query
    const movie = await movies.findOne(query, options);
    // Print the document returned by findOne()
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


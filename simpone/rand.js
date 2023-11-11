 import express from 'express'
// import mongoclient from 'mongoclient'
 import {MongoClient} from 'mongodb'
const uri = "mongodb://0.0.0.0:27017/";
const vowels = ['a','e','i','o','u'];
const l = [];
for (var i =0; i < 26;i++){
    if (vowels.indexOf(String.fromCharCode(97+i)) >= 0){
        continue;
    }
    l.push(String.fromCharCode(97+i))
}
vowels.push('y')
const getRand = (min,max)=>{
    if (max == null){
        max = 11;
    }else{
        max++;
    }
    if (min == null ){
        min == 0
    }
    return min + Math.floor(Math.random()*(max-min))
}
const getl = ()=>l[getRand(0,20)];
const getV = ()=>vowels[getRand(0,5)];
const getName = ()=> {
    const len = getRand(2,10);
    const startVowel = getRand(0,1)
    let name = '';
    for(var i = 0; i < len; i++){
        if (i % 2 == startVowel){
            name += getV();
            continue;
        }
        name += getl();
    }
    return name;
}

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
app.listen(8080)
 import express   from 'express'
 const ex = express
//  import {MongoClient} from 'mongodb'

//  const m = new MongoClient('0.0.0.0/:12711')
//  console.log(m);


const app = ex()

app.use(ex.static('public'))
const  geta = (req,res)=>{
    res.send(32432+'' + 'asdfafds');
}

app.get('/b', (req,res)=>{
    res.send(Math.random()+'')
})
app.get('/c',  geta);
app.get('/a', (req,res)=>res.send('aa'));
app.listen(8081);
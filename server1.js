const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();
const bodyParser =require ('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 1000;


//router file
const personrouter = require('./router/personrouter');
const menuroter = require('./router/menuroutes');


app.get('/',function(req,res ){
  res.send('welcome to Hotel');
})

app.use('/person',personrouter);
app.use('/menuitem',menuroter);
  


app.listen(PORT,()=>{
    console.log("this is runing the server");
})


//chnage the listen in new file like 3000 to chnage 5000 this 


const express=require('express');
const app=express();
const db=require('./db');

const bodyParser =require ('body-parser');
app.use(bodyParser.json());

//router file
  const personrouter =require('./router/personrouter');
  app.use('/person'.personrouter);

  const menuroter =require('./router/menuroutes');
  app.use('/menuitem'.menuroter);
  


app.listen(4000,()=>{
    console.log("this is runing the server");
})

//chnage the listen in new file like 3000 to chnage 5000 this 


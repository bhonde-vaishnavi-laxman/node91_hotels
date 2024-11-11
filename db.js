const mongoose=require('mongoose');
require('dotenv').config();
 //mongoose in install npm i mongoose
//const mongoURL= process.LOCAL_URL;// define the bmongoDB connection URL step1:local data
const mongoURL = process.env.MONGODB_URL; //online data is storing in using mongo altas
//chnage ther name of HOTELS (like company college .etc)
//set a mongoDB connection step:2

mongoose.connect(mongoURL,{
})

//get the defulat connection 
//mongoose maintains a default connectionobject respesenting the mongoDB connecting step:3

const db=mongoose.connection;

//define event listeners for database connection stpe:4

db.on('connected',()=>{
    console.log("connected the mongoDB");
});


db.on('error',(err)=>{
    console.log("error for mongo connection");
});

db.on('disconneted',()=>{
    console.log('mongoDB is disconnected');
});


//exports the database connection stpe:6

module.exports=db;

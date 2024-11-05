const jsonstring='{"name":"vaishnvai","age":20,"city":"nager"}'
const object= JSON.parse(jsonstring);
console.log(object.name);




const jsonobject ={
    name:"vaishnavi bhonde",
    age:"25",
    city:"nager"
}
const string =JSON.stringify(jsonobject);
console.log( string);



const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/', function (req, res) {
    res.send('comeimg to the node js progarming')
  })

app.listen(3000)

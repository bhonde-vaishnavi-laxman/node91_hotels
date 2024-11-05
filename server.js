const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })


// app.get('/book', function (req, res) {
    
//     var books={
//         name:"software",
//         price:300,
//         aother:"jhon"
//     }
//     res.send(books)
//   })

  
app.get('/notbook', function (req, res) {
    res.send('wrting book is very nice and sommde in all notbooks plsese getup and shop now in nager')
  })

app.listen(8000 ,()=>{  //chnage the listen in new file like 3000 to chnage 5000 this 

    
    console.log("this is runing")
})

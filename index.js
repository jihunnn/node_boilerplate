const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000
mongoose.connect('mongodb+srv://mongodb:1234qwer@boilerplate.vylzx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! node js ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
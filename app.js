const express = require('express')
const app = express()
const path = require('path')

//app.get('/', function (req, res){
   // res.sendFile(path.resolve(__dirname, ''))
//})

app.get('/', function (req, res){
res.send('Hola mundo')
})

app.listen(3000)

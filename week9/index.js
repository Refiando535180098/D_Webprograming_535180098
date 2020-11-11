var express = require ('express')
const { userInfo } = require('os')

var app = express()

app.get('/HelloWorld', function(req,res){res.send('Halo Halo')})

app.get('/',function(req,res){res.send('HelloWorld!')})

app.post('/',function(req,res){res.send('Ini POST Request!')})

app.put('/user',function(req,res){res.send('PUT Request dijalankan!')})

app.delete('/user',function(req,res){res.send('DELETE Request pada suatu user!')})

app.user(express.static('public'));

//specified port

app.listen(3000)
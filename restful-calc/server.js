// npm init -y
// npm i express

var express = require('express')
var app = express();

app.get('/',(req,res)=>{
    res.send("For addition access /add<br>For subtraction access /sub<br>For multiplication access /mul<br>For division access /div");
});

app.get('/add/:id1/:id2',(req,res)=>{
    res.send((Number(req.params.id1)+Number(req.params.id2)).toString());
});

// do for /sub /mul and /div

app.listen(3000);

// node server.js (to run this)
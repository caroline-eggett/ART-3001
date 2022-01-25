var express = require('express');
var app = express();
require('dotenv').config()
const port = (process.env.PORT || 5000); 

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname })
})

app.listen(port, () => {   
   console.log("Example app listening");
})
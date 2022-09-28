"use strict";

const express = require("express");
const app = express();
const cors = requiere("cors");

app.options('*',cors());

app.get('/',function(req,res){
    res.send('Hello word');
});

app.get('/datos',function(req,res){
    const obj = {
        nombre:"Alex",
        edad:29
    }
    res.send(obj);
});

app.listen(3000);
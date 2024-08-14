const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://ahmedtwababd:b3pBSmR8p6Z0ixre@cluster0.tuxgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
const User = require('./model/users');


mongoose.connect(uri).then(() => {
    console.log(" connection successfully ")
}).catch((error)=>{
    console.log(' error happened',error)
});

app.get('/',(req,res)=>
{
    res.render('home.ejs',{
        string:"Welcome in my Home",
        p:"hello my friend"
    });
});

app.get('/createUser', async (req,res)=>
{
    let newUser = new User();
    newUser.name = 'ahmed';
    newUser.age = 26;
    newUser.email = "ahmed@hotmail.com";
    newUser.salary = 2700;

    await newUser.save();

    res.send('user created');
});

app.listen(4900,()=>{
    console.log('server start in port 4900');
});
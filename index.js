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

app.get('/info',(req,res)=>
{
    res.render('home.ejs',{
        string:"Welcome in info page",
        p:"hello my son in info page"
    });
});

app.get('/users/:id', async(req,res)=>
{
    const id = req.params.id;
    const user = await User.findById(id);
    res.json({user});
});

app.get('/users', async(req,res)=>
{
    const users = await User.find();
    res.json({users});
});

app.get('/createUser', async (req,res)=>
{
    let newUser = new User();
    newUser.name = 'Eng /ahmed tawab';
    newUser.age = 26;
    newUser.email = "ahmedali@hotmail.com";
    newUser.salary = 23900;

    await newUser.save();

    res.send('user created');
});



app.listen(3000,()=>{
    console.log('server start in port 3000');
});
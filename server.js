const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Cards = require('./dbCards');

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionURL = "mongodb+srv://admin:damodami43@cluster0.9hd5c.mongodb.net/tinder-clone?retryWrites=true&w=majority";

//Middlewares
app.use(express.json())
app.use(cors());

//Db config
mongoose.connect(connectionURL,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true
})


//API Endpoints
app.get('/',(req,res)=>{
    res.status(200).send(`Hello Backend`);
});

app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
});


//Listeners
app.listen(port,()=>{
    console.log(`Listening on LocalHost: ${port}`);
});
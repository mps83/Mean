const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var userController = require('./controllers/userController');

const app = express();

app.use(cors({ 
    origin : 'http://localhost:4200',
    methods: ['GET','POST','PUT','DELETE']
}));

app.use(bodyParser.json());
app.use('/api', userController);
app.use('*' , (req , res) => {
   res.send("Cannot get Api");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Connected on port ${port}...`);
});
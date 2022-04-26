const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
 
//Connect Mongo Atlas
//require('./server/config/connectMongo')();

require('./server/config/mongoose.config')
 
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/routes')(app); 

 
app.listen(8080, () => {
    console.log("Servidor Conectado")
})
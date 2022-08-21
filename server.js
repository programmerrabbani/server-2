const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const pageRoutes = require('./routes/pageRoutes');
const shopRoute = require('./routes/shopRoute');

// ENVIRONMENT VARIABLE
dotenv.config();
const PORT = process.env.SERVER_PORT || 2020;


// INIT EXPRESS

const app = express();

// DATA MANAGE

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//STATIC FOLDER

app.use(express.static('./public'));

// ROUTER INIT

app.use( pageRoutes);
app.use(shopRoute);






// LISTEN

app.listen(PORT , () => {

    console.log(` SERVER IS RUNNING ON PORT ${PORT} `.bgGreen.black);

});
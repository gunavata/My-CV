const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

const Routes = require('./routes/mainroutes.js');

app.use(Routes);

app.listen(process.env.PORT || 8080, (req, res, cb) => {
    console.log("Server is running on port 8080!")
}) 
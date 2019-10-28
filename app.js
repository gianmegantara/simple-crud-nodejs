const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoute = require('./routes/admin');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(adminRoute);

app.listen(5001)
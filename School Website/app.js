const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const MONGODB_URI = 'mongodb://localhost:27017/college';
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoute = require('./routes/admin');
const collegeRoute = require('./routes/college');
const authRoute = require('./routes/auth');


app.use('/admin', adminRoute);
app.use(collegeRoute);
app.use(authRoute);


mongoose
   .connect(MONGODB_URI)
   .then((result) => {
      app.listen(3005);
   })
   .catch((err) => {
      console.log(err);
   });

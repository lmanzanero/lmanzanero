const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const admin = require('./routes/admin');
const dashboard = require('./routes/dashboard');
const posts = require('./routes/posts');
const projects = require('./routes/projects');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db

const db = require('./config/keys').mongoURI;

//connect to mongoose
mongoose.connect(db, { useNewUrlParser: true})
        .then(() => console.log('Connected to lmanzanero db'))
        .catch(err => console.log(err));

// Use Routes
app.use('/api/admin', admin);
app.use('/api/dashboard', dashboard);
app.use('/api/posts', posts);
app.use('/api/projects', projects);
  
app.get('/', (req, res) => {
    res.send({
      "health check": "ok!"
    });
  });

const port = process.env.PORT || 4000;

app.listen(port);

console.log('RESTful API server started on: ' + port);
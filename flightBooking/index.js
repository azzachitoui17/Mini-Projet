const express = require('express');
const mongoose = require('mongoose');
const routes=require('./routes/routes');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

const dbURI ='mongodb+srv://azzachtioui17:azza123@cluster0.pegzw4q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));



app.use(routes);
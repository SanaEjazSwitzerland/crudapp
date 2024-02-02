// index.js

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { MongoClient } from 'mongodb'; //2nd step
import mongoose from 'mongoose'; //3rd step
import User from './schema.js'
import router from './router.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/<database>';//4th step
const uri = 'mongodb://localhost:27017/latestdb';//4th step
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });//4th step

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

connection.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

// const newUser = new User({
//     name: 'John Doe',
//     email: 'john@example.com',
//     age: 30
//   });
  
  // Save the user to the database
//   newUser.save()
//   .then(user => {
//     console.log('User saved successfully:', user);
//   })
//   .catch(err => {
//     console.error('Error saving user:', err);
//   });




app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.use('/api', router);
// app.post('/submit', (req, res) => {
//   const formData = req.body;
//   console.log(formData);
//   const newUser = new User({
//     name: formData.name,
//     email: formData.email
//   });
  
  // Save the user to the database
//   newUser.save()
//   .then(user => {
//     console.log('User saved successfully:', user);
//   })
//   .catch(err => {
//     console.error('Error saving user:', err);
//   });
//   res.send('Form submitted successfully!');
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


//2nd step connect to mongodb


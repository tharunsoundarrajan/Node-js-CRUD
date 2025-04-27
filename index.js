const express=require('express');
const app=express();
const mongoose=require('mongoose');
const productRoute=require('./routes/product.routes');
const dotenv=require('dotenv');

dotenv.config();

app.use(express.json());

app.get('/testApi', (req, res) => {
  res.send('Hello World')
})

app.listen(3000);

app.use('/api',productRoute)

// MongoDb Connection
const uri = process.env.MONGO_CONNECTION_STRING;
 
//connect to mongodb
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));


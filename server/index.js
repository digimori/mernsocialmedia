import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import postRoutes from './routes/posts.js';
//We're gonna need the process.env.REACT_APP_MONGODBURL, security my dude.

const app = express();

app.use('/posts', postRoutes); // This is basically saying that every route inside postRoutes is going to start with /posts

//Initial setup
app.use(bodyParser.json({ limit: '30mb', extended: true}));  // This is because we're going to be using images and don't want to use too much data
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}));
app.use(cors());  

// MongoDB Setup
const CONNECTION_URL = process.env.REACT_APP_MONGODBURL; // Connection URL for Database cluster - The credentials are stored in .env for security
const PORT = process.env.PORT || 5000; // Port for deployment parameters
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // Not mandatory, but helps prevent error warnings in console
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))  // This is like Try/Catch. If it connects successfully, the string will show else:
    .catch((error) => console.log(error.message) )

mongoose.set('strictQuery', true); // This is setting the database connection, the parameters are preventing unnecessary warnings.
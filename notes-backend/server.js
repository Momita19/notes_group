const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createGroupRouter = require('./routes/createGroup');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
// Built-in middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));


mongoose.connect('mongodb+srv://Momita:Momita@cluster0.gckilv2.mongodb.net/NotesHub?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


// Use the routes
app.use('/api', createGroupRouter);

app.listen(3001, () => {
    console.log('Server is running on port 3001...');
});
const express = require('express')
const DataModel = require('../models/createGroup');

const router = express.Router();

router.post('/notes', async(req, res) => {
    try {
        console.log('Request Body:', req.body);  
        const newDa = new DataModel(req.body);
        await newDa.save();
        res.status(201).send(newDa);
    } catch (error) {
        console.error('Error:', error.message);  
        res.status(400).send(error);
    }
});

module.exports = router;
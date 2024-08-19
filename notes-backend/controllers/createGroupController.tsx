const DataModel = require('../models/createGroup');

const createGroup = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const newGroup = new DataModel(req.body);
        await newGroup.save();
        res.status(201).send(newGroup);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).send(error);
    }
};

module.exports = { createGroup };

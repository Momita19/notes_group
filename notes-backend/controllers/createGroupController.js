const DataModel = require('../models/createGroup');

const createGroup = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const data = await DataModel.create({
            groupName:req.body.groupName || "nooooo"
        })
        return res.status(201).json({message:"data saved",data:data})
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).send(error);
    }
};

module.exports = { createGroup };

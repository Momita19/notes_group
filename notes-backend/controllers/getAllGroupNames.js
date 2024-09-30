const DataModel = require('../models/createGroup');

const getAllGroupNames = async (req, res) => {
    try {
        const groups = await DataModel.find({}).lean();
        console.log(groups, "groups")
        res.status(200).json(groups);
    } catch (error) {
        console.error('Error fetching group names:', error.message);
        res.status(500).json({ error: 'Failed to fetch group names' });
    }
};

module.exports = { getAllGroupNames };
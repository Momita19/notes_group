const mongoose = require('mongoose')

// define schema 
const groupSchema = new mongoose.Schema({
    groupName:  { type: String, required: true, unique:true },
})

// creare model
const DataModel = mongoose.model('Group', groupSchema);

module.exports = DataModel;
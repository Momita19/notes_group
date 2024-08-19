const mongoose = require('mongoose')

// define schema 
const groupSchema = new mongoose.Schema({
    groupName:  { type: String, required: true, unique:true },
    // workEmail:  { type: String, required: true },
    // phoneNumber:  { type: String, required: true },
    // companyName:  { type: String, required: true },
    // designation:  { type: String, required: true },
    // noOfEmployees:  { type: String, required: true },
    // subscribe:  { type: Boolean, required: true },
})

// creare model
const DataModel = mongoose.model('notes', groupSchema);

module.exports = DataModel;
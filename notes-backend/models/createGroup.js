const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    groupName:  { type: String, required: true, unique:true },
})

// creare model
const DataModel = mongoose.model('notes', groupSchema);

module.exports = DataModel;
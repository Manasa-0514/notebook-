const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  // Define your schema fields here
  username: String,
  password: String,
  // Other fields as needed
});

const itemModel = mongoose.model('Item', itemSchema);

module.exports = itemModel;

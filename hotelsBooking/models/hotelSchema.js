const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  place: {
    type: Number,
    required: true
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;

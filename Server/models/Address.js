const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const addressSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  latlng: {    
      lat: {
        type: String,
        required: true,
      },
      lng: {
        type: String,
        required: true,
      }
    },
  bookingId: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

});

const Address = model('Address', addressSchema);

module.exports = Address;

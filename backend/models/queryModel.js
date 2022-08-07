const mongoose = require('mongoose')

const querySchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your full name correctly']
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your full name correctly']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email']
  },
  message: {
    type: String,
    required: [true, 'Enter your query']
  },
  phone: {
    type: String
  },
  responded: {
    type: Boolean,
    default: false,
    required: true
  }
}, {
  timestamps: true
}) 


module.exports = mongoose.model('Query', querySchema)
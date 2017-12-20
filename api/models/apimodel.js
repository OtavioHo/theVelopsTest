'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var apiSchema = new Schema({
  email: {
    type: String,
    required: 'Enter email'
  },
  first_name:{
    type: String,
    required: 'Enter first name'
  },
  last_name:{
    type: String,
    required: 'Enter last name'
  },
  personal_phone:{
    type: String,
    required: 'Enter phone number'
  },
  password: {
    type: String,
    required: 'Enter your password'
  }
});

module.exports = mongoose.model('Users', apiSchema);
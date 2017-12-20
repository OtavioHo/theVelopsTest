'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var apiSchema = new Schema({
  name: {
    type: String,
    required: 'Enter your name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  pwd: {
    type: String,
    required: 'Enter your password'
  }
});

module.exports = mongoose.model('Users', apiSchema);
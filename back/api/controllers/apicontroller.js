'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');

var faker = require('faker');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.read_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

//search by email
exports.verify = function(req, res) {
  User.find({email: req.params.email}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
}

//populate DB
exports.populate = function (req, res) {
  if (req.params.n > 0){
    var new_user = new User({"email": faker.internet.email(),
                    "first_name": faker.name.firstName(),
                    "last_name": faker.name.lastName(),
                    "personal_phone": faker.phone.phoneNumber(),
                    "password": faker.internet.password()});
    new_user.save(function(err, user) {
      res.redirect('/populate/' + (req.params.n - 1));
    });
  }
}


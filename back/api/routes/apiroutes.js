'use strict';
module.exports = function(app) {
  var theVelops = require('../controllers/apicontroller');

  // theVelops Routes
  app.route('/users')
    .get(theVelops.list_all_users)
    .post(theVelops.create_user);


  app.route('/users/:userId')
    .get(theVelops.read_user)
    .put(theVelops.update_user)
    .delete(theVelops.delete_user);
};

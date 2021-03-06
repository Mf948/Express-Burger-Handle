// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.all('burger', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(condition,cb) {
    orm.create('burger', condition,  (res) => cb(res));
  },
  update(condition, cb) {
    orm.update('burger', condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('burger', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

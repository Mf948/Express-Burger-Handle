// Import MySQL connection.
const connection = require('./connection.js');

// Helper function for SQL syntax to add question marks (?, ?, ?) in query



// Object for all our SQL statement functions.
const orm = {
  all(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create(condition, vals, cb) {
    let queryString = `INSERT INTO burger VALUES (${condition})`;

    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  update(table, condition, cb) {

    let queryString = `UPDATE ${table} SET devoured = true WHERE id = ${condition}`
 
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete(table, condition, cb) {
    let queryString = `DELETE FROM ${table}`;
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;

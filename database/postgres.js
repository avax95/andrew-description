const pg = require('pg');
const key = require('../config.js');
const path = require('path');

const connectionString = key.connect;
const db = new pg.Client(connectionString);
db.connect();
const grabData = function(id, callback) {
  // let q = `SELECT * FROM rooms LEFT JOIN highlights ON rooms.id = highlights.roomid_high WHERE rooms.id = ${id}`;
  let qhigh = `SELECT * FROM highlights WHERE roomid_high = ${id}`;
  let qRoom = `SELECT * FROM rooms WHERE id = ${id}`;
  let qDes = `SELECT * FROM description WHERE roomid_des = ${id}`;
  let qAmen = `SELECT * FROM amenities WHERE roomid_a = ${id}`;
  let qNight = `SELECT * FROM nightsOfMinimumStayForDateRange WHERE roomid_night = ${id}`;
  let giantObj;
  return new Promise (function(resolve, reject) {
    db.query(qRoom, function(err, results){
      if (err) {
        reject(err);
      }
      resolve(results.rows);
    });
  })
  .then(function(rooms) {
    giantObj = rooms;
    return new Promise (function(resolve, reject) {
      db.query(qhigh, function(err, results) {
        if (err) {
          throw(err);
        }
        giantObj.push(results.rows);
        // console.log(giantObj);
        resolve(results.rows);
      });
    })
  })
  .then(function(highlights) {
    return new Promise(function(resolve, reject) {
      db.query(qDes, function(err, results) {
        if (err) {
          throw err;
        }
        giantObj.push(results.rows);
        resolve(results.rows);
      });
    });
  })
  .then(function(description) {
    return new Promise(function(resolve, reject) {
      db.query(qAmen, function(err, results) {
        if (err) {
          throw err;
        }
        giantObj.push(results.rows);
        resolve(results.rows);
      });
    });
  })
  .then(function(amenities) {
    return new Promise(function(resolve, reject) {
      db.query(qNight, function(err, results){
        if (err) {
          throw err;
        }
        giantObj.push(results.rows);
        callback(giantObj);
        resolve(results.row);
      });
    });
  })
};

const insertData = function() {
};
module.exports = {
  grabData,
  insertData
}
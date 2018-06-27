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
  let qNight = `SELECT * FROM nightOfMinimumStayForDateRange WHERE roomid_night = ${id}`;
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
        // giantObj.push(results.rows);
        let highlights = results.rows.map(function(el) {
          return {title: el.title_high, comment: el.comment_high};
        });
        rooms[0]["highlights"] = highlights;
        resolve(rooms);
      });
    })
  })
  .then(function(rooms) {
    return new Promise(function(resolve, reject) {
      db.query(qDes, function(err, results) {
        if (err) {
          throw err;
        }
        // giantObj.push(results.rows);
        let description = results.rows.map(function(el, i) {
          return {title: el.title_des, comment: el.comment_des};
        });
        rooms[0]["description"] = description;
        // console.log(rooms);
        resolve(rooms);
      });
    });
  })
  .then(function(rooms) {
    return new Promise(function(resolve, reject) {
      db.query(qAmen, function(err, results) {
        if (err) {
          throw err;
        }
        // giantObj.push(results.rows);
        // console.log("once",rooms)
        let amenities = results.rows.map(function(el) {
          return {title: el.title_a, contents: [{item: el.item_a, description: el.description_a}]};
        });
        rooms[0]["amenities"] = amenities;
        // console.log(rooms[0]["amenities"]);
        resolve(rooms);
      });
    });
  })
  .then(function(rooms) {
    return new Promise(function(resolve, reject) {
      db.query(qNight, function(err, results){
        if (err) {
          throw err;
        }
        giantObj.push(results.rows);
        // callback(rooms);
        // console.log(results.rows);
        // console.log(rooms);
        let nights = results.rows.map(function(el) {
          return {startDate: el.startDate, endDate: el.endDate, nightsOfMinimumStay: el.nightOfMinStay};
        });
        rooms[0]["nightsOfMinimumStayForDateRange"] = nights;
        console.log(rooms[0])
        callback(rooms[0]);
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
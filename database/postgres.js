const pg = require('pg');
const key = require('../config.js');

const connectionString = key.connect;
const db = new pg.Client(connectionString);
db.connect();
const grabData = function(id, callback) {
  let qhigh = `SELECT * FROM highlights WHERE roomid_high = ${id}`;
  let qRoom = `SELECT * FROM rooms WHERE id = ${id}`;
  let qDes = `SELECT * FROM description WHERE roomid_des = ${id}`;
  let qAmen = `SELECT * FROM amenities WHERE roomid_a = ${id}`;
  let qNight = `SELECT * FROM nightOfMinimumStayForDateRange WHERE roomid_night = ${id}`;
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
        let description = results.rows.map(function(el, i) {
          return {title: el.title_des, comment: el.comment_des};
        });
        rooms[0]["description"] = description;
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
        let amenities = results.rows.map(function(el) {
          return {title: el.title_a, contents: [{item: el.item_a, description: el.description_a}]};
        });
        rooms[0]["amenities"] = amenities;
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
        let nights = results.rows.map(function(el) {
          return {startDate: el.startDate, endDate: el.endDate, nightsOfMinimumStay: el.nightOfMinStay};
        });
        rooms[0]["nightsOfMinimumStayForDateRange"] = nights;
        callback(rooms[0]);
      });
    });
  })
};
const putData = function(id, description, title_des, callback) {
  let qPut = `INSERT INTO description (roomid_des, title_des, comment_des) VALUES (?,?,?)`;
  db.query(qPut, [id,  title_des, description], function(err, results) {
    if (err) {
      throw err;
    }
  });
};
const delData = function(id) {
  let qDel = `DELETE FROM description WHERE roomid_des = ${id}`;
  db.query(qDel, function(err, results) {
    if (err) {
      throw err;
    }
  });
};
module.exports = {
  grabData,
  putData,
  delData
}
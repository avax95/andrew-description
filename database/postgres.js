const pg = require('pg');
const key = require('../config.js');

const connectionString = key.connect;
const db = new pg.Client(connectionString);
db.connect();
const grabData = (id, callback) => {
  const qhigh = `SELECT * FROM highlights WHERE roomid_high = ${id}`;
  const qRoom = `SELECT * FROM rooms WHERE id = ${id}`;
  const qDes = `SELECT * FROM description WHERE roomid_des = ${id}`;
  const qAmen = `SELECT * FROM amenities WHERE roomid_a = ${id}`;
  const qNight = `SELECT * FROM nightOfMinimumStayForDateRange WHERE roomid_night = ${id}`;
  return new Promise((resolve, reject) => {
    db.query(qRoom, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results.rows);
    });
  }).then((rooms) => {
    return new Promise((resolve) => {
      db.query(qhigh, (err, results) => {
        if (err) {
          throw (err);
        }
        const highlights = results.rows.map((el) => {
          return { title: el.title_high, comment: el.comment_high };
        });
        rooms[0].highlights = highlights;
        resolve(rooms);
      });
    })
  }).then((rooms) => {
    return new Promise((resolve) => {
      db.query(qDes, (err, results) => {
        if (err) {
          throw err;
        }
        const description = results.rows.map((el, i) => {
          return { title: el.title_des, comment: el.comment_des };
        });
        rooms[0].description = description;
        resolve(rooms);
      });
    });
  }).then((rooms) => {
    return new Promise((resolve) => {
      db.query(qAmen, (err, results) => {
        if (err) {
          throw err;
        }
        const amenities = results.rows.map((el) => {
          return { title: el.title_a, contents: [{ item: el.item_a, description: el.description_a }] };
        });
        rooms[0].amenities = amenities;
        resolve(rooms);
      });
    });
  }).then((rooms) => {
    return new Promise((resolve) => {
      db.query(qNight, (err, results) => {
        if (err) {
          throw err;
        }
        const nights = results.rows.map((el) => {
          return { startDate: el.startDate, endDate: el.endDate, nightsOfMinimumStay: el.nightOfMinStay };
        });
        rooms[0].nightsOfMinimumStayForDateRange = nights;
        callback(rooms[0]);
      });
    });
  })
};
const putData = (id, description, title_des, callback) => {
  const qPut = 'INSERT INTO description (roomid_des, title_des, comment_des) VALUES (?,?,?)';
  db.query(qPut, [id, title_des, description], (err, results) => {
    if (err) {
      throw err;
    }
  });
};
const delData = (id) => {
  const qDel = `DELETE FROM description WHERE roomid_des = ${id}`;
  db.query(qDel, (err) => {
    if (err) {
      throw err;
    }
  });
};
module.exports = {
  grabData,
  putData,
  delData,
};

const { expect } = require('chai');
const express = require('express');
const pg = require('pg');
const request = require('request');
const key = require('../config.js');

describe('TEST', () => {
  describe('Database responses', () => {
    const connectionString = key.connect;
    const db = new pg.Client(connectionString);
    before(() => {
      db.connect();
    });

    after(() => {
      db.end();
    });
    it('Should store post request', (done) => {
      const queryInsert = 'INSERT INTO description (roomid_des, title_des, comment_des) VALUES (888888888, \'testtitle\', \'testcomment\')';
      const querySelect = 'SELECT * FROM description where roomid_des = 888888888';
      const queryDelete = 'DELETE FROM description where roomid_des = 888888888';
      db.query(queryInsert, (err) => {
        if (err) {
          throw err;
        } else {
          db.query(querySelect, (err1, results) => {
            if (err1) {
              throw err1;
            } else {
              expect(results.rows[0].roomid_des).to.equal(888888888);
              db.query(queryDelete, (err2) => {
                if (err2) {
                  throw err2;
                } else {
                  done();
                }
              });
            }
          });
        }
      });
    });
  });

  describe('Server Response should be json data with correct ID', () => {
    it('server test', (done) => {
      request.get('http://localhost:8081/room/rooms/1000', (err, res) => {
        const dataBody = JSON.parse(res.body);
        expect(dataBody.id).to.equal(1000);
        done();
      });
    });
    it('Should be able to grab the static html page', (done) => {
      request.get('http://localhost:8081/rooms/1000', (err, res) => {
        expect(res.body.includes('<div id=listingDescription></div>')).to.equal(true);
        done();
      });
    });
  });
});

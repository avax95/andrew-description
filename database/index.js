const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/roomsandstuff");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', () => console.log('mongoose - we\'re connected'));

const roomSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  owner: String,
  ownerPicture_Url: { type: String, unique: true },
  propertyType: String,
  title: String,
  score: Number,
  location: String,
  numberOfGuests: Number,
  numberOfRooms: Number,
  numberBeds: Number,
  numberOfBaths: Number,
  numberOfViews: Number,
  highlights: {},
  descriptionSummary: String,
  description: {},
  amenities: {},
  sleepingArrangments: {},
  smoking: Boolean,
  petSuitable: Boolean,
  partiesOrEvents: Boolean,
  noSafeForChildrenUnder: Number,
  checkInStartTime: Number,
  checkInEndTime: Number,
  checkOutTime: Number,
  selfCheckInWithLockBox: Boolean,
  rules: String,
  rulesToAcknowledge: String,
  cancellationType: Number,
  cancellationSummary: String,
  nightsOfStayVary: Boolean,
  nightsOfMinimumStay: Number,
  nightsOfMinimumStayForDateRange: {},
  daysFromLastUpdate: Number,
});

const roomsData = mongoose.model('roomsData', roomSchema);

const save = (roomArray, callback) => {
  roomArray.forEach((room) => {
    const item = new Room(room);

    item.save((err) => {
      if (err) return console.error(err);
      console.log('success saving a room!');
      return console.log('db item.save success');
    });
  });
  //callback();
};

const get = (id, callback) => {
  roomsData.find({ id }, (err, item) => {
    if (err) console.log('error from get db function', err);
    callback(item);
    // console.log('from the get db request ->', item);
  });
};

//save(dataGen.roomData);

module.exports.save = save;
module.exports.get = get;

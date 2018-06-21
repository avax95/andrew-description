DROP TABLE IF EXISTS highlights;
CREATE TABLE highlights(
  id SERIAL PRIMARY KEY,
  title CHAR(50),
  comment TEXT
);
DROP TABLE IF EXISTS description;
CREATE TABLE description(
  id SERIAL PRIMARY KEY,
  title CHAR(50),
  comment TEXT
);
DROP TABLE IF EXISTS amenities;
CREATE TABLE amenities(
  id SERIAL PRIMARY KEY,
  item SMALLINT,
  description TEXT
);
DROP TABLE IF EXISTS nightsOfMinimumStayForDateRange;
CREATE TABLE nightsOfMinimumStayForDateRange(
  id SERIAL PRIMARY KEY,
  startDate CHAR(50),
  endDate CHAR(50),
  nightOfMinStay SMALLINT
);
DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms(
  id SERIAL PRIMARY KEY,
  owner CHAR(30),
  ownerPicture_Url TEXT,
  propertyType TEXT,
  title TEXT,
  score SMALLINT,
  location TEXT,
  numberOfGuest SMALLINT,
  numberOfRooms SMALLINT,
  numberBeds SMALLINT,
  numberOfBaths SMALLINT,
  numberOfViews SMALLINT,
  descriptionSummary TEXT,
  smoking BOOLEAN,
  petSuitable BOOLEAN,
  partiesOrEvents BOOLEAN,
  noSafeForChildrenUnder SMALLINT,
  checkInStartTime SMALLINT,
  checkIntEndTime SMALLINT,
  checkOutTime SMALLINT,
  selfCheckInWithLockBox BOOLEAN,
  rules TEXT,
  rulestoAcknowledge TEXT,
  cancellationType SMALLINT,
  cancellationSummary TEXT,
  nightsOfStayVary BOOLEAN,
  nightsOfMinimumStay SMALLINT,
  daysFromLastUpdate SMALLINT,
  highlights INT REFERENCES highlights(id) ON UPDATE CASCADE ON DELETE CASCADE,
  description INT REFERENCES description(id) ON UPDATE CASCADE ON DELETE CASCADE,
  amenities INT REFERENCES amenities(id) ON UPDATE CASCADE ON DELETE CASCADE,
  nightsOfMinimumStayForDateRange INT REFERENCES nightsOfMinimumStayForDateRange(id) ON UPDATE CASCADE ON DELETE CASCADE
);


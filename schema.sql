DROP TABLE IF EXISTS highlights;
CREATE TABLE highlights(
  id SERIAL PRIMARY KEY,
  roomid_high INT,
  title_high CHAR(50),
  comment_high TEXT
);
-- CREATE INDEX room_idh ON highlights(roomid_high);
DROP TABLE IF EXISTS description;
CREATE TABLE description(
  id SERIAL PRIMARY KEY,
  roomid_des INT,
  title_des CHAR(50),
  comment_des TEXT
);
-- CREATE INDEX room_idd ON description(roomid_des);
DROP TABLE IF EXISTS amenities;
CREATE TABLE amenities(
  id SERIAL PRIMARY KEY,
  roomid_a INT,
  title_a CHAR(50),
  item_a CHAR(50),
  description_a TEXT
);
-- CREATE INDEX room_ida ON amenities(roomid_a);
DROP TABLE IF EXISTS nightsOfMinimumStayForDateRange;
CREATE TABLE nightOfMinimumStayForDateRange(
  id SERIAL PRIMARY KEY,
  roomid_night INT,
  "startDate" CHAR(50),
  "endDate" CHAR(50),
  "nightOfMinStay" SMALLINT
);
-- CREATE INDEX room_idn ON nightOfMinimumStayForDateRange(roomid_night);
DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms(
  id SERIAL PRIMARY KEY,
  owner CHAR(30),
  "ownerPicture_Url" TEXT,
  "propertyType" TEXT,
  title TEXT,
  score SMALLINT,
  location TEXT,
  "numberOfGuest" SMALLINT,
  "numberOfRooms" SMALLINT,
  "numberBeds" SMALLINT,
  "numberOfBaths" SMALLINT,
  "numberOfViews" SMALLINT,
  "descriptionSummary" TEXT,
  smoking BOOLEAN,
  "petSuitable" BOOLEAN,
  "partiesOrEvents" BOOLEAN,
  "noSafeForChildrenUnder" SMALLINT,
  "checkInStartTime" SMALLINT,
  "checkIntEndTime" SMALLINT,
  "checkOutTime" SMALLINT,
  "selfCheckInWithLockBox" BOOLEAN,
  rules TEXT,
  "rulestoAcknowledge" TEXT,
  "cancellationType" SMALLINT,
  "cancellationSummary" TEXT,
  "nightsOfStayVary" BOOLEAN,
  "nightsOfMinimumStay" SMALLINT,
  "daysFromLastUpdate" SMALLINT
);
 

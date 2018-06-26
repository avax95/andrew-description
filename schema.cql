DROP KEYSPACE IF EXISTS descript;
CREATE KEYSPACE descript WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE descript;
DROP TABLE IF EXISTS highlights;
CREATE TABLE highlights(
  id int,
  roomid int,
  title varchar,
  comment text,
  PRIMARY KEY (roomid, id)
);
DROP TABLE IF EXISTS description;
CREATE TABLE description(
  id int,
  roomid int,
  title varchar,
  comment TEXT,
  PRIMARY KEY (roomid,id)
);
DROP TABLE IF EXISTS amenities;
CREATE TABLE amenities(
  id int,
  roomid int,
  title varchar,
  item varchar,
  description text,
  PRIMARY KEY (roomid, id)
);
DROP TABLE IF EXISTS nightsOfMinimumStayForDateRange;
CREATE TABLE nightsOfMinimumStayForDateRange(
  id int,
  roomid int,
  "startDate" varchar,
  "endDate" varchar,
  "nightOfMinStay" int,
  PRIMARY KEY (roomid, id)
);
DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms(
  id UUID,
  owner varchar,
  "ownerPicture_Url" text,
  "propertyType" text,
  title text,
  score int,
  location text,
  "numberOfGuest" int,
  "numberOfRooms" int,
  "numberBeds" int,
  "numberOfBaths" int,
  "numberOfViews" int,
  "descriptionSummary" text,
  smoking boolean,
  "petSuitable" boolean,
  "partiesOrEvents" boolean,
  "noSafeForChildrenUnder" int,
  "checkInStartTime" int,
  "checkIntEndTime" int,
  "checkOutTime" int,
  "selfCheckInWithLockBox" boolean,
  rules text,
  "rulestoAcknowledge" text,
  "cancellationType" int,
  "cancellationSummary" text,
  "nightsOfStayVary" boolean,
  "nightsOfMinimumStay" int,
  "daysFromLastUpdate" int,
  PRIMARY KEY (id)
);
USE descript;
-- COPY highlights(roomid, title, comment) FROM '../heavySink/hTable.csv';
-- COPY rooms(id, owner, "ownerPicture_Url", "propertyType", title, score, location, "numberOfGuest", "numberOfRooms", "numberBeds", "numberOfBaths", "numberOfViews", "descriptionSummary", smoking, "petSuitable", "partiesOrEvents", "noSafeForChildrenUnder", "checkInStartTime", "checkIntEndTime", "checkOutTime", "selfCheckInWithLockBox", rules, "rulestoAcknowledge", "cancellationType", "cancellationSummary", "nightsOfStayVary", "nightsOfMinimumStay", "daysFromLastUpdate") FROM '../heavySink/mainTableCass.csv';

-- COPY amenities(roomid, title, item, description) FROM '../heavySink/amenitiesTable.csv';

-- COPY description(roomid, title, comment) FROM '../heavySink/descriptTable.csv';
COPY nightsOfMinimumStayForDateRange(roomid, "startDate", "endDate", "nightOfMinStay") FROM '../heavySink/nightsMinTable.csv';
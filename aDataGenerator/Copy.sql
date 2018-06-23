\COPY rooms(owner, "ownerPicture_Url", "propertyType", title, score, location, "numberOfGuest", "numberOfRooms", "numberBeds", "numberOfBaths", "numberOfViews", "descriptionSummary", smoking, "petSuitable", "partiesOrEvents", "noSafeForChildrenUnder", "checkInStartTime", "checkIntEndTime", "checkOutTime", "selfCheckInWithLockBox", rules, "rulestoAcknowledge", "cancellationType", "cancellationSummary", "nightsOfStayVary", "nightsOfMinimumStay", "daysFromLastUpdate") FROM '../heavySink/mainTable.csv' DELIMITER ',';

-- \COPY amenities(roomid, title, item, description) FROM '../heavySink/amenitiesTable.csv' DELIMITER ',';

-- \COPY description(roomid, title, comment) FROM '../heavySink/descriptTable.csv' DELIMITER ',';
-- -- 
-- \COPY highlights(roomid, title, comment) FROM '../heavySink/hTable.csv' DELIMITER ',';

-- \COPY nightsOfMinimumStayForDateRange(roomid, "startDate", "endDate", "nightOfMinStay") FROM '../heavySink/nightsMinTable.csv' DELIMITER ',';
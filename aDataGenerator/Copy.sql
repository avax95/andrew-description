\COPY rooms(id, owner, "ownerPicture_Url", "propertyType", title, score, location, "numberOfGuest", "numberOfRooms", "numberBeds", "numberOfBaths", "numberOfViews", "descriptionSummary", smoking, "petSuitable", "partiesOrEvents", "noSafeForChildrenUnder", "checkInStartTime", "checkIntEndTime", "checkOutTime", "selfCheckInWithLockBox", rules, "rulestoAcknowledge", "cancellationType", "cancellationSummary", "nightsOfStayVary", "nightsOfMinimumStay", "daysFromLastUpdate") FROM '../heavySink/mainTable.csv' DELIMITER ',';

-- \COPY amenities(id, roomid_a, title_a, item_a, description_a) FROM '../heavySink/amenitiesTable.csv' DELIMITER ',';

-- \COPY description(id, roomid_des, title_des, comment_des) FROM '../heavySink/descriptTable.csv' DELIMITER ',';
-- -- 
-- \COPY highlights(id, roomid_high, title_high, comment_high) FROM '../heavySink/hTable.csv' DELIMITER ',';

-- \COPY nightOfMinimumStayForDateRange(id, roomid_night, "startDate", "endDate", "nightOfMinStay") FROM '../heavySink/nightsMinTable.csv' DELIMITER ',';
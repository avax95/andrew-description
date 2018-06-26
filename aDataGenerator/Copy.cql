USE descript;
COPY highlights(id, roomid, title, comment) FROM '../heavySink/hTableCass.csv';
-- COPY rooms(id, owner, "ownerPicture_Url", "propertyType", title, score, location, "numberOfGuest", "numberOfRooms", "numberBeds", "numberOfBaths", "numberOfViews", "descriptionSummary", smoking, "petSuitable", "partiesOrEvents", "noSafeForChildrenUnder", "checkInStartTime", "checkIntEndTime", "checkOutTime", "selfCheckInWithLockBox", rules, "rulestoAcknowledge", "cancellationType", "cancellationSummary", "nightsOfStayVary", "nightsOfMinimumStay", "daysFromLastUpdate") FROM '../heavySink/mainTableCass.csv';

-- COPY amenities(id,roomid, title, item, description) FROM '../heavySink/amenitiesTableCass.csv';

-- COPY description(id,roomid, title, comment) FROM '../heavySink/descriptTableCass.csv';
-- COPY nightsOfMinimumStayForDateRange(id,roomid, "startDate", "endDate", "nightOfMinStay") FROM '../heavySink/nightsMinTableCass.csv';
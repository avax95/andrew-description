-- COPY rooms(id, owner, ownerPicture, propertyType, title, score, location, numberOfGuest, numberOfRooms, numberOfBeds, numberOfBaths, numberOfViews, descriptionSummary, smoking, petSuitable, partiesOrEvents, noSafeForChildrenUnder, checkInStartTime, checkOutTime, selfCheckInWithLockBox, rules, rulestoAcknowledge, cancellationType, cancellationSummary, nightsOfStayVary, nightsOfminimumStay, daysFromLastUpdate); 
-- FROM '../heavySink/mainTable';

\COPY amenities(roomid, title, item, description) FROM '../heavySink/amenitiesTable.csv' DELIMITER ',';

\COPY description(roomid, title, comment) FROM '../heavySink/descriptionTable.csv' DELIMITER ',';
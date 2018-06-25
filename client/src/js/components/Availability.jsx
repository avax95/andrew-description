import React from 'react';

const Availability = (props) => {
  const month = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sept',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };

  const stayRange = props.data.nightsOfMinimumStayForDateRange.map((item, i) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);

    return (
      <p key={i}>From <span className="strong">{`${month[startDate.getMonth()]} ${startDate.getDate()} - ${month[endDate.getMonth()]} ${endDate.getDate()},${1900 + endDate.getYear()} `}</span>
        <span>the minimum stay is <span className="strong">{`${item.nightsOfMinimumStay} nights.`}</span></span>
      </p>
    );
  });

  return (
    <hgroup id="availabilityBoard" >
      <div className="marginTop">
        <div className="title_1">Availability</div>
      </div>
      <div className="availabilityTable">
        <p><span className="strong">{`${props.data.nightsOfMinimumStay} nights `}</span><span>nights Of Minimum Stay</span></p>
        {stayRange}
        <p>{`Updated ${props.data.daysFromLastUpdate} days ago`}</p>
      </div>
    </hgroup>
  );
};

export default Availability;

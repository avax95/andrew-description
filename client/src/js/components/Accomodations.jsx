import React from 'react';

const Accomodation = (props) => {
  return (
    <hgroup id="accomodations">
      <img className="accomodationIcon" id="userIcon" alt="" src="https://s3-us-west-1.amazonaws.com/napbnb/icon21.png" />
      <div id="" >{` ${props.data.numberOfGuests} ${props.data.numberOfGuests > 1 ? 'guests' : 'guest'} `}</div>
      <img className="accomodationIcon" id="roomIcon" alt="" src="https://s3-us-west-1.amazonaws.com/napbnb/icon19.png" />
      <div id="" >{` ${props.data.numberOfRooms}  ${props.data.numberOfRooms > 1 ? 'bedrooms' : 'bedroom'} `}</div>
      <img className="accomodationIcon" id="bedIcon" alt="" src="https://s3-us-west-1.amazonaws.com/napbnb/icon15.png" />
      <div id="" >{` ${props.data.numberBeds} ${props.data.numberBeds > 1 ? 'beds' : 'bed'} `}</div>
      <img className="accomodationIcon" id="bathIcon" alt="" src="https://s3-us-west-1.amazonaws.com/napbnb/icon13.png" />
      <div id="" >{` ${props.data.numberOfBaths} ${props.data.numberOfBaths > 1 ? 'bathrooms' : 'bathroom'}`}</div>
    </hgroup>
  );
};

export default Accomodation;

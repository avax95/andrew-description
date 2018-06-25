import React from 'react';

const SleepingArrangements = (props) => {
  const roomItems = {
    singleBed: [{
      bed: 'single bed',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon30.png',
    }, {
      bed: 'sleeping mat',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon28.png',
    }, {
      bed: 'hammock',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon27.png',
    }, {
      bed: 'pool float',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon25.png',
    }, {
      bed: 'pool float',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon26.png',
    }],
    doubleBed: [{
      bed: 'king bed',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon23.png',
    }, {
      bed: 'queen bed',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon23.png',
    }, {
      bed: 'sofa bed',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon31.png',
    }, {
      bed: 'bunk bed',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon24.png',
    }, {
      bed: 'floor mattress',
      url: 'https://s3-us-west-1.amazonaws.com/napbnb/icon29.png',
    }],
    emptyRoom: ['Library', 'Conference Room', 'Lounge Area', 'Meditation Room', 'Common Space'],
  };

  const randomInteger = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

  let guests = props.data.numberOfGuests;
  const beds = props.data.numberBeds;
  const rooms = props.data.numberOfRooms;

  const addBed = (guest) => {
    if (guest === 1) {
      return roomItems.singleBed[randomInteger(0, 4)];
    }
    if (guest === 2) {
      return roomItems.doubleBed[randomInteger(0, 4)];
    }
    return null;
  };

  const arrayOfRooms = [];

  const assignStaying = () => {
    for (let i = 1; i < rooms + 1; i += 1) {
      if (guests > 2) {
        arrayOfRooms.push({ room: `Bedroom ${i}`, beds: [addBed(2)] });
        guests -= 2;
      } else if (guests === 1) {
        arrayOfRooms.push({ room: `Bedroom ${i}`, beds: [addBed(1)] });
        guests -= 1;
      } else if (guests === 0) {
        arrayOfRooms.push({ room: `${roomItems.emptyRoom[randomInteger(0, 4)]}` });
      }
    }

    if (guests > 0) {
      arrayOfRooms.map(room => {
        if (guests > 1) {
          room.beds.push(addBed(2));
          guests -= 2;
        } else if (guests === 1) {
          room.beds.push(addBed(1));
          guests -= 1;
        }
        return null;
      });
    }

    while (guests > 0 && guests !== 0) {
      if (guests === 4 || guests > 4) {
        arrayOfRooms.push({ room: `${roomItems.emptyRoom[4]}`, beds: [addBed(2), addBed(2)] });
        guests -= 4;
      } else if (guests === 3) {
        arrayOfRooms.push({ room: `${roomItems.emptyRoom[3]}`, beds: [addBed(2), addBed(1)] });
        guests -= 3;
      } else if (guests === 2) {
        arrayOfRooms.push({ room: `${roomItems.emptyRoom[randomInteger(1, 2)]}`, beds: [addBed(1), addBed(1)] });
        guests -= 2;
      } else if (guests === 1) {
        arrayOfRooms.push({ room: `${roomItems.emptyRoom[0]}`, beds: [addBed(1)] });
        guests -= 1;
      }
    }

    while (arrayOfRooms.length !== props.data.numberOfRooms
      && arrayOfRooms.length < props.data.numberOfRooms) {
      arrayOfRooms.push({ room: roomItems.emptyRoom[randomInteger(0, 4)] });
    }
  };
  assignStaying();

  const arrangements = arrayOfRooms.map((room, j) => {
    let listOfBeds = '';
    let listOfBedImages = [];
    if (room.beds) {
      listOfBedImages = room.beds.map((element, i) => {
        listOfBeds += element.bed;
        if (i !== room.beds.length - 1) {
          listOfBeds += ', ';
        }
        return (
          <img className="icon_3" key={i} alt={element.bed} src={element.url} />
        );
      });
    }
    return (
      <div key={j}>
        <div className="aRoom">
          <div className="arrangementImages">
            {listOfBedImages.length !== 0 ? listOfBedImages : null}
          </div>
          <div>
            <div className="roomArrangemenBedTitles">{room.room}</div>
            <div className="roomArrangementText">{listOfBeds}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="SleepingArrangementsSection">
      <div>
        <div className="title_1">Sleeping Arrangements</div>
        <div className="SleepingArrangementsTable">
          {arrangements}
        </div>
      </div>
    </div>
  );
};

export default SleepingArrangements;
